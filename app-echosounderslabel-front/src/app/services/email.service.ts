import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public sendEmail(emailForm: Email): Promise<any> {
    return emailjs.send(
      'service_isqqj4j',
      'template_ennj88d',
      {
        subject: emailForm.subject,
        email: emailForm.email,
        link: emailForm.link,
        message: emailForm.message,
      },
      'pkTestToFail'
      // 'Azq369sWkCxlSckIt'
    )
  }
  public sendEmail2(emailForm: Email): Promise<any> {
    return emailjs.send(
      'service_x',
      'template_x',
      {
        subject: emailForm.subject,
        email: emailForm.email,
        link: emailForm.link,
        message: emailForm.message,
      },
      'pkx'
    )
  }
}
