import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../../../shared/shared.module';
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
