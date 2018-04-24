import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RestrictedComponent } from './restricted.component';

const childRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'app/pages/restricted/dashboard/dashboard.module#DashboardModule'
  }
];

const restrictedRoutes: Routes = [
  { path: '',
    component: RestrictedComponent,
    children: childRoutes
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(restrictedRoutes)
  ],
  declarations: [RestrictedComponent]
})
export class RestrictedModule { }
