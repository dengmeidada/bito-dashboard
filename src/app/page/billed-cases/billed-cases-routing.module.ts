import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInformationComponent } from './basic-information/basic-information.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicInformation',
        component: BasicInformationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilledCasesRoutingModule {}
