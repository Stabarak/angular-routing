import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPswdComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class IndexModule {}
