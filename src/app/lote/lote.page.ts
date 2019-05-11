import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lote',
  templateUrl: './lote.page.html',
  styleUrls: ['./lote.page.scss'],
})
export class LotePage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
