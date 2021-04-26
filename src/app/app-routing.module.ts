import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeFormComponent } from './authorize-form/authorize-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
{ path: '', redirectTo: '/shop/home-page', pathMatch: 'full' },
{ path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
{ path: 'admin', loadChildren: () => import('./admin-section/admin.module').then(m => m.AdminModule) },
{ path: 'login', component: AuthorizeFormComponent },
{ path: 'register', component: RegisterFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
