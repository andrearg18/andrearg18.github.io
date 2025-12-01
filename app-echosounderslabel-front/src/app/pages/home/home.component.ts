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

  private fails = 0

  constructor(
    private formBuilder: UntypedFormBuilder,
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
    console.info('v1.13 Secondary service')
    this.initForm()
  }

  public sendEmail(): void {
    this.showInvalidFormError = false
    if (this.emailForm.invalid) {
      setTimeout(() => this.showInvalidFormError = true)
    } else {
      this.showInvalidFormError = false
      this.waitingResponse = true

      this.emailService.sendEmail(this.emailForm.value)
        .then(() => {
          console.info('<Sending>')
          this.waitingResponse = false
          this.isSuccessSubmission = true
        })
        .catch(error => {
          console.error('Error sending email => "', error, '"')
          this.isFailedSubmission = true
          this.handleError()
        })
    }
  }

  private handleError(): void {
    this.fails++
    if (this.fails == 2) {
      this.emailService.sendEmail2(this.emailForm.value)
        .then(() => {
          console.info('<Sending by secondary method>')
          this.waitingResponse = false
          this.isSuccessSubmission = true
        })
        .catch(error => {
          console.error('Error sending email by secondary method => "', error, '"')
          this.isFailedSubmission = false
          this.waitingResponse = false
          this.isUnavailableService = true
        })

    } else {
      setTimeout(() => this.waitingResponse = false, 10000)
    }
  }

  private initForm(): void {
    this.emailForm = this.formBuilder.group({
      subject: ['', Validators.required],
      email: ['', Validators.required],
      link: ['', Validators.required],
      message: ['', Validators.required],
    })

  }
}
