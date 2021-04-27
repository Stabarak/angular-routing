import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public postData = {
    username: '',
    password: '',
  };
  public errorText = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginUser(): void {
    if (this.postData.username && this.postData.password) {
      this.errorText = '';
      if (this.authService.login(this.postData)) {
        this.router.navigateByUrl('/');
      }
    } else {
      this.errorText = 'Wrong';
    }
  }
}
