import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private register : FormGroup;

  constructor(private _router:Router,  private formBuilder: FormBuilder ) {

    this.register = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required]
    }, {validator: this.checkPasswords});
    
   }

  ngOnInit() {
    
  }

  callRegister(){
    this._router.navigateByUrl('/login');
  }

  voltar(){
    this._router.navigateByUrl('/login');
  }

  checkPasswords(group: FormGroup) { 
    let pass = group.controls.senha.value;
    let confirmPass = group.controls.confirmacao.value;

    return pass === confirmPass ? null : { notSame: true }     
  }
}
