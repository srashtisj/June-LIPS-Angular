import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PhotosComponent } from './photos/photos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'photos', component: PhotosComponent },
  {
    path: '', redirectTo: 'employee',
    pathMatch: 'full'
  },
  {
    path: 'product',
    // before Angular 8
    // loadChildren  : './product/product.module#ProductModule',
    loadChildren: () =>
      import('./product/product.module').
        then(module => module.ProductModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
