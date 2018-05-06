import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfitLossComponent } from './profit-loss.component';

const restrictedRoutes: Routes = [
  { 
    path: '',
    component: ProfitLossComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(restrictedRoutes)
  ],
  declarations: [ProfitLossComponent]
})
export class ProfitLossModule { }
