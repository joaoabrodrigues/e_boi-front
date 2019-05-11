import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GadoPageRoutingModule } from './gado.router.module';

import { IonicModule } from '@ionic/angular';

import { GadoPage } from './gado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GadoPageRoutingModule
  ],
  declarations: [GadoPage]
})
export class GadoPageModule {}
