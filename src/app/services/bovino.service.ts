import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public salvar(bovino, token) {
    return this.http.post('https://e-boi.herokuapp.com/api/v1/bovino', bovino, { headers: { "Authorization": "Bearer" + token } });
  }
}
