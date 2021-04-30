import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component'
import { HomeComponent } from './home/home.component'
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';


const routes: Routes = [
  
{ path: 'order-page', component: OrderPageComponent },
{ path: 'home-page', component: HomeComponent },
{ path: 'contact-page', component: ContactPageComponent },
{ path: 'category-page', component: CategoryPageComponent },
{ path: 'product-page', component: ProductPageComponent },
{ path: 'blog-page', component: BlogPageComponent },
{ path: 'cart-page', component: CartPageComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
