import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ExpandableModule } from "../components/expandable/expandable.module";

import { LotePage } from './lote.page';

const routes: Routes = [
  {
    path: '',
    component: LotePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LotePage]
})
export class LotePageModule {}