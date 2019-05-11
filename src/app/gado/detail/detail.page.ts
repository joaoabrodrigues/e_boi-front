import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private id;

  constructor(private _router:Router, private activateRoute:ActivatedRoute) { 
    
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

  public descedencia(){
    this._router.navigateByUrl("/tabs/gado/descedencia/"+this.id);
  }

  public vender(){
    this._router.navigateByUrl("/tabs/gado/venda/"+this.id);
  }

  public inseminacao(){
    this._router.navigateByUrl("/tabs/gado/inseminacao/"+this.id);
  }
  
  public semen(){
    this._router.navigateByUrl("/tabs/gado/semen/"+this.id);
  }
}
