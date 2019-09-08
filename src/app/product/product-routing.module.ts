import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductGroupComponent } from './product-group/product-group.component';
import { ProductFormArrayComponent } from './product-form-array/product-form-array.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: ProductComponent,
    // canActivateChild: [AuthGuard],
    children: [
      { path: 'add/group', component: ProductGroupComponent },
      { path: 'add/form', component: ProductFormComponent }
    ],
  },
  { path: 'add', component: ProductAddComponent },
  { path: 'add/array', component: ProductFormArrayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
