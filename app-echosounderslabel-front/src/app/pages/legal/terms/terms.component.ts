import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE_TERMS } from '../../../../shared/constants/base';

@Component({
  selector: 'app-terms',
  standalone: false,
  templateUrl: './terms.component.html',
  styleUrl: '../legal.sass'
})
export class TermsComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(TITLE_TERMS)
  }
}
