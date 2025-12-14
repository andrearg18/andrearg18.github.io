import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
  standalone: false,
})
export class FooterComponent {

  constructor(private navigationService: NavigationService) { }

  public goTerms(): void {
    this.navigationService.goTerms()
  }

  public goPrivacy(): void {
    this.navigationService.goPrivacy()
  }

  public goCookies(): void {
    this.navigationService.goCookies()
  }

  public goMyEmail(): void {
    this.navigationService.goMyEmail()
  }

}
