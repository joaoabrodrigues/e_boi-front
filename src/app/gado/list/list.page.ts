import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  public openDetail(identifier){
    this._router.navigateByUrl("/tabs/gado/detail/"+identifier);
  }

  public add(){
    this._router.navigateByUrl("/tabs/gado/add");
  }
}
