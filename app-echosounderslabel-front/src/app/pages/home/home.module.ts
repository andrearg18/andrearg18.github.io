import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MATERIAL,
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
