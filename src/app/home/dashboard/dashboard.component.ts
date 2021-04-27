import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userData: Object;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserData().then((data) => {
      console.log(data);
      this.userData = data;
    });
  }
}
