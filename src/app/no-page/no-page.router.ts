import { Routes } from '@angular/router';
import { NoPageComponent } from './no-page.component';

export const NoPageRoutes: Routes = [
  { path: '**', component: NoPageComponent },
];
