import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadoPage } from './gado.page';

const routes: Routes = [
  {
    path: '',
    component: GadoPage,
    children: [
      { 
        path: 'add', 
        children: [
            {
              path: '',
              loadChildren: './add/add.module#AddPageModule'
            }
          ]
      },
      { 
        path: 'list', 
        children: [
            {
              path: '',
              loadChildren: './list/list.module#ListPageModule'
            }
          ]
      },
      { 
        path: 'detail/:id', 
        children: [
            {
              path: '',
              loadChildren: './detail/detail.module#DetailPageModule'
            }
          ]
      },
      { 
        path: 'descedencia/:id', 
        children: [
            {
              path: '',
              loadChildren: './descedencia/descedencia.module#DescedenciaPageModule'
            }
          ]
      },
      { 
        path: 'inseminacao/:id', 
        children: [
            {
              path: '',
              loadChildren: './inseminacao/inseminacao.module#InseminacaoPageModule'
            }
          ]
      },
      { 
        path: 'semen/:id', 
        children: [
            {
              path: '',
              loadChildren: './semen/semen.module#SemenPageModule'
            }
          ]
      },
      { 
        path: 'venda/:id', 
        children: [
            {
              path: '',
              loadChildren: './venda/venda.module#VendaPageModule'
            }
          ]
      },
      {
        path: '',
        redirectTo: '/tabs/gado/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/gado/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GadoPageRoutingModule {}
