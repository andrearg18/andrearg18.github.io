import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../components/layouts/core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
