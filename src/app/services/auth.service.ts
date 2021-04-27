import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public async login(postData) {
    const responseData = {
      name: 'Syed',
      id: 1234,
      token: '253545313423',
    };

    await sessionStorage.setItem('userData', JSON.stringify(responseData));
    return true;
  }

  public signup(postData) {}

  public forgotpassword(postData) {}

  public async logout() {
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }

  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem('userData');
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public async getUserData() {
    const userData = await sessionStorage.getItem('userData');
    return JSON.parse(userData);
  }
}
