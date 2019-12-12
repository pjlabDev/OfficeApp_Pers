import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialBuyPage } from './material-buy.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialBuyPageRoutingModule {}
