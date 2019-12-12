import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'materials',
    children: [
      {
        path: '',
        loadChildren: () => import('./materials/materials.module').then( m => m.MaterialsPageModule)
      },
      {
        path: 'detail/:materialId',
        loadChildren: () => import('./material-detail/material-detail.module').then( m => m.MaterialDetailPageModule)
      },
      {
        path: 'edit/:materialId',
        loadChildren: () => import('./material-edit/material-edit.module').then( m => m.MaterialEditPageModule)
      },
      {
        path: 'buy/:materialId',
        loadChildren: () => import('./material-buy/material-buy.module').then( m => m.MaterialBuyPageModule)
      },
      { path: 'cart',
      loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/materials',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
