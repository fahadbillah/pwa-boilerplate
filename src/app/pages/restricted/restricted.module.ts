import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RestrictedComponent } from './restricted.component';

const restrictedRoutes: Routes = [
  { path: '',  
    component: RestrictedComponent,
    // children: [
    //   {
    //     path: '',
    //     component: CrisisListComponent,
    //     children: [
    //       {
    //         path: ':id',
    //         component: CrisisDetailComponent
    //       },
    //       {
    //         path: '',
    //         component: CrisisCenterHomeComponent
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: 'dashboard',
    loadChildren: 'app/pages/restricted/dashboard/dashboard.module#DashboardModule'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(restrictedRoutes)
  ],
  declarations: [RestrictedComponent]
})
export class RestrictedModule { }
