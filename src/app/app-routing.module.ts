import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PhotosComponent } from './photos/photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'aboutus', component: AboutusComponent,
    outlet: 'about'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'employee', component: EmployeeComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Employe Header',
      name: 'Employee1'
    }
  },
  { path: 'photos', component: PhotosComponent },
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // before Angular 8
    // loadChildren  : './product/product.module#ProductModule',
    loadChildren: () =>
      import('./product/product.module').
        then(module => module.ProductModule)
  },
  { path: '**', component: PageNotFoundComponent },
  { path: 'test', loadChildren: () => import('./testmodule/testmodule.module').then(m => m.TestmoduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
