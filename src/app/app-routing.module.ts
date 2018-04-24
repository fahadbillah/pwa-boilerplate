import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    loadChildren: 'app/pages/restricted/restricted.module#RestrictedModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
