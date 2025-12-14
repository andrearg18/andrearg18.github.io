import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [CoreComponent],
  exports: [CoreComponent],
  imports: [
    CommonModule,
    MenuModule,
    FooterModule,
  ]
})
export class CoreModule { }
