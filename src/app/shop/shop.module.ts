import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
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
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page/order-page.component';
import { HomeComponent } from './home/home.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SecondaryHeaderComponent } from './secondary-header/secondary-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';







@NgModule({
  declarations: [
    ShopComponent,
    OrderPageComponent,
    HomeComponent,
    ContactPageComponent,
    CategoryPageComponent,
    ProductPageComponent,
    BlogPageComponent,
    CartPageComponent,
    SecondaryHeaderComponent,
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
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
    ShopRoutingModule,
    ImageCropperModule,
    MatExpansionModule
  ],
  providers: [],
})
export class ShopModule { }
