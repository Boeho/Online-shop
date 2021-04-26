import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoriesTableComponent } from './categories-table/categories-table.component'
import { ProductsComponent } from './products/products.component'
import { AdminNavComponent } from './admin-nav/admin-nav.component'
import { FormAddCategoriesComponent } from './form-add-categories/form-add-categories.component'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';
import { DiscountsTableComponent } from './discounts-table/discounts-table.component';
import { FormAddDiscountComponent } from './form-add-discount/form-add-discount.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { FormAddPostComponent } from './form-add-post/form-add-post.component';
import { UserTypesTableComponent } from './user-types-table/user-types-table.component';
import { FormAddUserTypeComponent } from './form-add-user-type/form-add-user-type.component';
import { TransportationOptionsTableComponent } from './transportation-options-table/transportation-options-table.component';
import { FormAddTransportationOptionComponent } from './form-add-transportation-option/form-add-transportation-option.component';





@NgModule({
  declarations: [
    CategoriesTableComponent,
    ProductsComponent,
    AdminNavComponent,
    AdminComponent,
    FormAddCategoriesComponent,
    FormAddProductComponent,
    DiscountsTableComponent,
    FormAddDiscountComponent,
    PostsTableComponent,
    FormAddPostComponent,
    UserTypesTableComponent,
    FormAddUserTypeComponent,
    TransportationOptionsTableComponent,
    FormAddTransportationOptionComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AngularEditorModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [],
})
export class AdminModule { }
