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

  public isFailedSubmission = false

  public isSuccessSubmission = false

  public showInvalidFormError = false

  public submissionError = ''

  public submissionMessage = ''

  public waitingResponse = false

  constructor(
    private formBuilder: UntypedFormBuilder,
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
    console.info('v1.10 Test fix form 7')
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
          this.waitingResponse = false
          this.isFailedSubmission = true
          this.emailService.setErrorLog(this.emailForm.value)
        })
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
