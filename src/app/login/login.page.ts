import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private _router:Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(res=> {
          this._router.navigateByUrl('/tabs/gado');
          window.localStorage.setItem("oauthToken", res['token']);
        },
        error=> {
          this.email = "";
          this.password = "";
          alert("usuário ou senha inválidos");
        }
      );
  }

  register(){
    this._router.navigateByUrl('/register');
  }
}
