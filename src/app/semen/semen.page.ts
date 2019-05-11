import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
