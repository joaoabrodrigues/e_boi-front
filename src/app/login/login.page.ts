import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  login(){
    this._router.navigateByUrl('/tabs/gado');
  }

  register(){
    this._router.navigateByUrl('/register');
  }
}
