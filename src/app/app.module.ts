import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';

import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';

import { routes } from './app.router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [AppComponent, IndexComponent, HomeComponent, NoPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HomeModule,
    IndexModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
