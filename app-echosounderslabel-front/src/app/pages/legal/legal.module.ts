import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    TermsComponent,
    CookiesComponent,
    PrivacyComponent,

  ],
  exports: [
    TermsComponent,
    CookiesComponent,
    PrivacyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LegalModule { }
