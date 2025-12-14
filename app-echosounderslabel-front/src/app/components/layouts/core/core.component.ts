import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-core',
  standalone: false,
  templateUrl: './core.component.html',
  styleUrl: './core.component.sass'
})
export class CoreComponent {

  constructor(
    private navigationService: NavigationService
  ) { }

  public goHome(): void {
    this.navigationService.goHome()
  }

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
