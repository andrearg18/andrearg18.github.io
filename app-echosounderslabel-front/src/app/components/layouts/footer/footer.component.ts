import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
  standalone: false,
})
export class FooterComponent {
  @Input() public showContent = false

  @Input() public showTerms = false

  @Input() public showPrivacy = false

  @Input() public showCookies = false

  @Output() public showContentChange = new EventEmitter<boolean>()

  @Output() public showTermsChange = new EventEmitter<boolean>()

  @Output() public showPrivacyChange = new EventEmitter<boolean>()

  @Output() public showCookiesChange = new EventEmitter<boolean>()

  public goTerms(): void {
    // this._goPage('terms')
    this.showContent = false
    this.showTerms = true
    this.showPrivacy = false
    this.showCookies = false
    this._emitAll()
  }

  public goPrivacy(): void {
    // this._goPage('privacy-policy')
    this.showContent = false
    this.showTerms = false
    this.showPrivacy = true
    this.showCookies = false
    this._emitAll()
  }

  public goCookies(): void {
    // this._goPage('manage-cookies')
    this.showContent = false
    this.showTerms = false
    this.showPrivacy = false
    this.showCookies = true
    this._emitAll()
  }
  public goMyEmail(): void {
    this._goPage('mailto:andrearglaviana@gmail.com')
  }

  private _goPage(href: string): void {
    window.open(href, '_black')
  }

  private _emitAll(): void {
    this.showContentChange.emit(this.showContent)
    this.showTermsChange.emit(this.showTerms)
    this.showPrivacyChange.emit(this.showPrivacy)
    this.showCookiesChange.emit(this.showCookies)
  }
}
