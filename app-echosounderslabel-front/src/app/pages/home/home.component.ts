import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { Title } from '@angular/platform-browser';
import {
  TITLE_HOME, FORM_SUCCESS_SUBMISSION,
  FORM_INVALID_FORM_REQUIRED, FORM_INVALID_FORM_EMAIL,
  FORM_FAILED_SUBMISSION, FORM_UNAVAILABLE_SERVICE
} from '../../../shared/constants/base';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  public emailForm!: UntypedFormGroup

  public isUnavailableService = false

  public isFailedSubmission = false

  public isSuccessSubmission = false

  public showInvalidRequiredError = false

  public showInvalidEmailError = false

  public submissionError = ''

  public submissionMessage = ''

  public waitingResponse = false

  private readonly EXPIRE_TIME = 600000

  private fails = 0

  constructor(
    private titleService: Title,
    private formBuilder: UntypedFormBuilder,
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
    console.info('v1.23 Fixed Subject')
    this.titleService.setTitle(TITLE_HOME)
    this._initForm()
    this._handleLocalStorage()
    this._setValueChanges()
  }

  public sendEmail(): void {
    this.showInvalidRequiredError = false
    this.showInvalidEmailError = false
    if (this.emailForm.get('email')?.hasError('email')) {
      setTimeout(() => this.showInvalidEmailError = true)
    } else if (this.emailForm.invalid) {
      setTimeout(() => this.showInvalidRequiredError = true)
    } else {
      this.showInvalidRequiredError = false
      this.waitingResponse = true

      this.emailService.sendEmail(this.emailForm.value)
        .then(() => this._handleCompletedAction())
        .catch(error => this._handleError(error))
    }
  }

  public getMessage(): string {
    if (this.isSuccessSubmission) {
      return FORM_SUCCESS_SUBMISSION
    } else if (this.showInvalidRequiredError) {
      return FORM_INVALID_FORM_REQUIRED
    } else if (this.showInvalidEmailError) {
      return FORM_INVALID_FORM_EMAIL
    } else if (this.isFailedSubmission) {
      return FORM_FAILED_SUBMISSION.replace(/([\p{L}\p{N}_]+)(\s*:\()/gu, `<span class="--arg-line--nobreak">$1 :(</span>`)
    } else if (this.isUnavailableService) {
      return FORM_UNAVAILABLE_SERVICE.replace(/([\p{L}\p{N}_]+)(\s*:\()/gu, `<span class="--arg-line--nobreak">$1 :(</span>`)
    } else {
      return ''
    }
  }

  private _handleLocalStorage(): void {
    const form = localStorage.getItem('form')
    const unavailableTimeService = localStorage.getItem('unavailableTimeService')

    if (localStorage.getItem('sentForm')) {
      this.isSuccessSubmission = true
    } else if (form) {
      this.emailForm.patchValue(JSON.parse(form))
    }
    if (unavailableTimeService && Date.now() > JSON.parse(unavailableTimeService)) {
      localStorage.removeItem('unavailableTimeService')
    } else if (unavailableTimeService) {
      this.isUnavailableService = true
    }

  }

  private _setValueChanges(): void {
    this.emailForm.valueChanges.pipe().subscribe(value => {
      localStorage.setItem('form', JSON.stringify(value))
    })
  }

  private _initForm(): void {
    this.emailForm = this.formBuilder.group({
      genre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      link: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  private _handleError(error: any): void {
    console.error('Error sending email => "', error, '"')
    this.isFailedSubmission = true
    this.fails++
    if (this.fails == 2) {
      this.emailService.sendEmail2(this.emailForm.value)
        .then(() => this._handleCompletedAction(true))
        .catch(error => this._handleUnavailableService(error))
    } else {
      setTimeout(() => this.waitingResponse = false, 10000)
    }
  }

  private _handleCompletedAction(via2 = false): void {
    console.info(via2 ? '<Sending by secondary method>' : '<Sending>')
    this.waitingResponse = false
    this.isSuccessSubmission = true
    localStorage.removeItem('form')
    localStorage.setItem('sentForm', 'true')
  }

  private _handleUnavailableService(error: any): void {
    console.error('Error sending email by secondary method => "', error, '"')
    this.isFailedSubmission = false
    this.waitingResponse = false
    this.isUnavailableService = true
    localStorage.setItem('unavailableTimeService', JSON.stringify(Date.now() + this.EXPIRE_TIME))
  }

}
