import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialBuyPageRoutingModule } from './material-buy-routing.module';

import { MaterialBuyPage } from './material-buy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialBuyPageRoutingModule
  ],
  declarations: [MaterialBuyPage]
})
export class MaterialBuyPageModule {}
