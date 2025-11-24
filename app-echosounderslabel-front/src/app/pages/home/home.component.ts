import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  public emailForm!: UntypedFormGroup

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    console.info('v1 Responsive structure')
    this.initForm()
  }

  private initForm(): void {
    this.emailForm = this.formBuilder.group({
      subject: ['', Validators.required],
      email: ['', Validators.required],
      link: ['', Validators.required],
      about: ['', Validators.required],
    })

  }
}
