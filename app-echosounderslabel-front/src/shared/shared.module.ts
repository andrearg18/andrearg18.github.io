import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from '../app/components/layouts/menu/menu.module';
import { FooterModule } from '../app/components/layouts/footer/footer.module';

const MATERIAL = [
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule,
]

@NgModule({
  imports: [
    CommonModule,
    MATERIAL,
  ],
  exports: [
    CommonModule,
    MenuModule,
    FooterModule,
    MATERIAL,
  ]
})
export class SharedModule { }
