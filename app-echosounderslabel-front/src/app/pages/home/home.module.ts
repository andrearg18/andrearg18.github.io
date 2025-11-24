import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MenuModule } from '../../components/layouts/menu/menu.module';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MATERIAL,
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    MenuModule
  ],
})
export class HomeModule { }
