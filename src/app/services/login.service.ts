import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(email, password) {
    return this.http.post('https://e-boi.herokuapp.com/login', { email: email, password: password});
  }
}
