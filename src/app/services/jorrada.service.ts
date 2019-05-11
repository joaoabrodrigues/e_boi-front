import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JorradaService {

  constructor(private http: HttpClient) { }

  public listAll(oauthToken) {
    return this.http.get('https://e-boi.herokuapp.com/api/v1/jorrada', {headers:{Authorization: "Bearer " + oauthToken}});
  }
}
