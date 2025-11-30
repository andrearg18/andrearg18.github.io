import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

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
      'Azq369sWkCxlSckIt'
    )
  }

  // public getLogs(date?: Date): {}[] {
  //   const arrayLogs: string[] = date ? (_.split(date)) : _
  //   const arrayLogs: string[]
  //   return arrayLogs.map(log => {
  //     return {
  //       date: log.split(_, _),
  //       subject: log.split(_, _),
  //       email: log.split(_, _),
  //       link: log.split(_, _),
  //       message: log.split(_, _),
  //     }
  //   })
  // }

  public setLog(emailObject: Email): void {
    // const date = new Date()

  }

  public setErrorLog(emailObject: Email): void {
    // const date = new Date()

  }
}
