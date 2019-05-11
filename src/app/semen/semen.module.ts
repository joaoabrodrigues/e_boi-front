import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ExpandableModule } from '../components/expandable/expandable.module';

import { SemenPage } from './semen.page';

const routes: Routes = [
  {
    path: '',
    component: SemenPage
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
  declarations: [SemenPage]
})
export class SemenPageModule {}
