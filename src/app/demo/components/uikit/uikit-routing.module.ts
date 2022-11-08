import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'invalidstate',
        loadChildren: () =>
          import('./invalid/invalidstatedemo.module').then(
            (m) => m.InvalidStateDemoModule
          ),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./list/listdemo.module').then((m) => m.ListDemoModule),
      },
      {
        path: 'expertList',
        loadChildren: () =>
          import('./panels/panelsdemo.module').then((m) => m.PanelsDemoModule),
      },
      {
        path: 'externalLinkList',
        loadChildren: () =>
          import('./table/tabledemo.module').then((m) => m.TableDemoModule),
      },
      {
        path: 'systemParamsList',
        loadChildren: () =>
          import('./tree/treedemo.module').then((m) => m.TreeDemoModule),
      },
      {
        path: 'systemParams/systemParamsList',
        loadChildren: () =>
          import('./menus/menus.module').then((m) => m.MenusModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UikitRoutingModule {}
