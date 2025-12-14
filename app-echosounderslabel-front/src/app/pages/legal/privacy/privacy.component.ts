import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE_PRIVACY } from '../../../../shared/constants/base';

@Component({
  selector: 'app-privacy',
  standalone: false,
  templateUrl: './privacy.component.html',
  styleUrl: '../legal.sass'
})
export class PrivacyComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(TITLE_PRIVACY)
  }

}
