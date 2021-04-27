import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';
import { LoginGuard } from '../guards/login.guard';

export const IndexRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPswdComponent,
      },
    ],
  },
];
