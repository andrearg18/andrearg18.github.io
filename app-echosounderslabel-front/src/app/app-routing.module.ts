import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  // {
  //   path: 'form/:code',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [ChildAuthoritiesGuard],
  //   loadChildren: () => import('./pages/detail-lodging/detail-lodging.module').then(m => m.DetailLodgingModule),
  // },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
