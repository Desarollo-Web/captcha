import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  NgxCaptchaModule
  ]
})
export class LoginModule { }
