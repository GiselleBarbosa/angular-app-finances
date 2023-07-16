import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormRegisterComponent } from './form-register/form-register.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, FormRegisterComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, SharedModule],
})
export class HomeModule {}
