import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

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

  public showInvalidFormError = false

  public submissionError = ''

  public submissionMessage = ''

  public waitingResponse = false

  private readonly _SUCCESS_SUBMISSION_MESSAGE = 'Sent successfully!\nThank you for sending us your demo. If we are interested, we will contact you :)'

  private readonly _INVALID_FORM_MESSAGE = 'You must fill in all fields'

  private readonly _FAILED_SUBMISSION_MESSAGE = 'Something has gone wrong. Please wait a few seconds and try again :('

  private readonly _UNAVAILABLE_SERVICE_MESSAGE = 'Something has gone wrong. Please try again later :('

  private readonly _EXPIRE_TIME = 600000

  private fails = 0

  constructor(
    private formBuilder: UntypedFormBuilder,
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
    console.info('v1.18 Fixed success sending')
    this._initForm()
    this._handleLocalStorage()
    this._setValueChanges()
  }

  public sendEmail(): void {
    this.showInvalidFormError = false
    if (this.emailForm.invalid) {
      setTimeout(() => this.showInvalidFormError = true)
    } else {
      this.showInvalidFormError = false
      this.waitingResponse = true

      this.emailService.sendEmail(this.emailForm.value)
        .then(() => this._handleCompletedAction())
        .catch(error => this._handleError(error))
    }
  }

  public getMessage(): string {
    if (this.isSuccessSubmission) {
      return this._SUCCESS_SUBMISSION_MESSAGE
    } else if (this.showInvalidFormError) {
      return this._INVALID_FORM_MESSAGE
    } else if (this.isFailedSubmission) {
      return this._FAILED_SUBMISSION_MESSAGE.replace(/([\p{L}\p{N}_]+)(\s*:\()/gu, `<span class="--arg-line--nobreak">$1 :(</span>`)
    } else if (this.isUnavailableService) {
      return this._UNAVAILABLE_SERVICE_MESSAGE.replace(/([\p{L}\p{N}_]+)(\s*:\()/gu, `<span class="--arg-line--nobreak">$1 :(</span>`)
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
      email: ['', Validators.required],
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
    localStorage.setItem('unavailableTimeService', JSON.stringify(Date.now() + this._EXPIRE_TIME))
  }

}
