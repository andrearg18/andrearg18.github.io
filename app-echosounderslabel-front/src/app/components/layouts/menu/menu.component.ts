import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {

  public menuOpen = false

  public goToContact(): void {
    window.open('mailto:echosounderslabel@gmail.com', '_blank')
  }

  public goToAboutUs(): void {
    window.open('https://www.instagram.com/echosounders', '_blank')
  }

  public goToSoundCloud(): void {
    window.open('https://on.soundcloud.com/VrWdUGyGyOTnKS5aUw', '_blank')
  }

  // public goToYoutube(): void {
  //   window.open('', '_blank')
  // }

  // public goToInfo(): void {
  //   window.open('', '_blank')
  // }
}
