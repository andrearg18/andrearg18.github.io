import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private legalHost = 'legal'

  private legalTerms = 'terms'

  private legalPrivacy = 'privacy'

  private legalCookies = 'cookies'

  constructor(private router: Router) { }

  public goHome(): void {
    this.router.navigate([''])
  }

  public goTerms(): void {
    this.router.navigate([`${this.legalHost}/${this.legalTerms}`])
  }

  public goPrivacy(): void {
    this.router.navigate([`${this.legalHost}/${this.legalPrivacy}`])
  }

  public goCookies(): void {
    this.router.navigate([`${this.legalHost}/${this.legalCookies}`])
  }

  public goMyEmail(): void {
    window.location.href = 'mailto:andrearglaviana@gmail.com'
  }
}
