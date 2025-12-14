import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE_COOKIES } from '../../../../shared/constants/base';

@Component({
  selector: 'app-cookies',
  standalone: false,
  templateUrl: './cookies.component.html',
  styleUrl: '../legal.sass'
})
export class CookiesComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(TITLE_COOKIES)
  }
  // @Input() public fnManageCookies!: (confirm: boolean) => void

  // public manageCookies(confirm: boolean): void {
  //   if (this.fnManageCookies) {
  //     this.fnManageCookies(confirm)
  //   }
  // }
}
