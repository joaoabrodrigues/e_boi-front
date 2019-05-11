import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'gado',
        children: [
          {
            path: '',
            loadChildren: '../gado/gado.module#GadoPageModule'
          }
        ]
      },
      {
        path: 'leilao',
        children: [
          {
            path: '',
            loadChildren: '../leilao/leilao.module#LeilaoPageModule'
          }
        ]
      },
      {
        path: 'lote',
        children: [
          {
            path: '',
            loadChildren: '../lote/lote.module#LotePageModule'
          }
        ]
      },
      {
        path: 'semen',
        children: [
          {
            path: '',
            loadChildren: '../semen/semen.module#SemenPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/gado',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/gado',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
