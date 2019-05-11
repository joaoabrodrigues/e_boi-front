import { Component, OnInit } from '@angular/core';
import { JorradaService } from '../services/jorrada.service';

@Component({
  selector: 'app-semen',
  templateUrl: './semen.page.html',
  styleUrls: ['./semen.page.scss'],
})
export class SemenPage implements OnInit {

  public items: any = [
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false }
  ];

    expandItem(item): void {
      if (item.expanded) {
        item.expanded = false;
      } else {
        this.items.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }

  constructor(private jorradaService: JorradaService) {
   jorradaService.listAll(window.localStorage.getItem("oauthToken")).subscribe(e=> this.items = e);
  }

  ngOnInit() {
  }

}
