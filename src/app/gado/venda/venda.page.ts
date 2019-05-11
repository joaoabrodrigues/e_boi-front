import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.page.html',
  styleUrls: ['./venda.page.scss'],
})
export class VendaPage implements OnInit {
  
  private register : FormGroup;
  private id;

  constructor(private _router:Router,  private formBuilder: FormBuilder, private activateRoute:ActivatedRoute) {
    this.register = this.formBuilder.group({
        preco: ['', Validators.required]
      });
   }

   ngOnInit() {
    this.activateRoute.paramMap
    .subscribe((queryParams: ParamMap) => {
       this.id = queryParams.get('id');
       if(!this.id){
        alert("Ocorreu um erro ao obter o dados do boi");
        this._router.navigateByUrl("/tabs/gado/list");
       }
    }, (err)=>{
      alert("Ocorreu um erro ao obter o dados do boi");
      this._router.navigateByUrl("/tabs/gado/list");
    });
  }

  callRegister(){
    this._router.navigateByUrl("/tabs/gado/detail/"+this.id);
  }

  voltar(){
    this._router.navigateByUrl("/tabs/gado/detail/"+this.id);
  }
}
