import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from '../app/components/layouts/menu/menu.module';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ],
  exports: [
    CommonModule,
    MenuModule,
    ReactiveFormsModule,
    ...MATERIAL,
  ]
})
export class SharedModule { }
