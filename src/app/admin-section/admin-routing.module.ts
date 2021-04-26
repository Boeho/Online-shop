import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesTableComponent } from './categories-table/categories-table.component'
import { ProductsComponent } from './products/products.component'
import { DiscountsTableComponent } from './discounts-table/discounts-table.component'
import { PostsTableComponent } from './posts-table/posts-table.component'
import { UserTypesTableComponent } from './user-types-table/user-types-table.component'
import { TransportationOptionsTableComponent } from './transportation-options-table/transportation-options-table.component'




import { AdminComponent } from './admin.component'





const routes: Routes = [
{ path: '', component: AdminComponent, children:[
  { path: 'categories-table', component: CategoriesTableComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'discounts', component: DiscountsTableComponent },
  { path: 'posts', component: PostsTableComponent },
  { path: 'user-types', component: UserTypesTableComponent },
  { path: 'transportation-options', component: TransportationOptionsTableComponent },
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
