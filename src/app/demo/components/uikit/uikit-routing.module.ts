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
        path: 'newOncomingBill',
        loadChildren: () =>
          import('./list/listdemo.module').then((m) => m.ListDemoModule),
        // data: { bc: '新進件開單建檔區' },
      },
      {
        path: 'IntegratedQuery',
        loadChildren: () =>
          import('./panels/panelsdemo.module').then((m) => m.PanelsDemoModule),
      },
      {
        path: 'billingList',
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
