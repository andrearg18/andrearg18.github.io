import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  standalone: false,
  templateUrl: './core.component.html',
  styleUrl: './core.component.sass'
})
export class CoreComponent {
  public showContent = true

  public showTerms = false

  public showPrivacy = false

  public showCookies = false

  // ngOnInit(): void {
  //   this._validateCookies()
  // }

  // public manageCookies(confirm: boolean): void {
  //   localStorage.setItem('confirmCookies', confirm ? 'true' : 'false')
  //   this._validateCookies()
  // }

  // private _validateCookies(): void {
  //   if (localStorage.getItem('confirmCookies') === 'true') {
  //     this.showCookies = false
  //     this.showContent = true
  //   } else {
  //     this.showCookies = true
  //     this.showContent = false
  //   }
  // }

}
