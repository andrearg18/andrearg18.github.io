import { Component } from '@angular/core';
import { URL_EMAIL, URL_INSTAGRAM, URL_SOUND_CLOUD } from '../../../../shared/constants/base';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {

  public menuOpen = false

  public goToContact(): void {
    window.open(URL_EMAIL, '_blank')
  }

  public goToAboutUs(): void {
    window.open(URL_INSTAGRAM, '_blank')
  }

  public goToSoundCloud(): void {
    window.open(URL_SOUND_CLOUD, '_blank')
  }

  // public goToYoutube(): void {
  //   window.open('', '_blank')
  // }

  // public goToInfo(): void {
  //   window.open('', '_blank')
  // }
}
