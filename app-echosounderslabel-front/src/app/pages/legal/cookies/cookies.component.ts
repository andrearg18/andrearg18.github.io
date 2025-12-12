import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  standalone: false,
  templateUrl: './cookies.component.html',
  styleUrl: '../legal.sass'
})
export class CookiesComponent {
  // @Input() public fnManageCookies!: (confirm: boolean) => void

  // public manageCookies(confirm: boolean): void {
  //   if (this.fnManageCookies) {
  //     this.fnManageCookies(confirm)
  //   }
  // }
}
