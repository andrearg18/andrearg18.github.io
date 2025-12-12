import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
  standalone: false,
})
export class FooterComponent {

  public goTerms(): void {
    this._goPage('terms')
  }

  public goPrivacy(): void {
    this._goPage('privacy-policy')
  }

  public goCookies(): void {
    this._goPage('manage-cookies')
  }
  public goMyEmail(): void {
    this._goPage('mailto:andrearglaviana@gmail.com')
  }

  private _goPage(href: string): void {
    window.open(href, '_black')

  }
}
