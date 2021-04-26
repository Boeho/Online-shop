import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsDataSource, ProductsItem } from './products-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  // styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit, OnInit {

  constructor(private http:HttpClient) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductsItem>;
  dataSource: ProductsDataSource;
  page: number = 0;
  take: number = 25;

  displayedColumns = ['title', 'categoryId', 'sizeId', 'colorId', 'imageOnProductPage', 'imageOnCategoryPage', 'isConsiderDiscount', 'inStore', 'productId', 'priceTypeId', 'value', 'titlePhoto', 'imagePath', 'photoProductId'];

  ngOnInit() {
    this.dataSource = new ProductsDataSource();
    this.http.get<ProductsItem[]>('http://igor-blad.northeurope.azurecontainer.io/product-categories')
    .subscribe(res=>{
      this.dataSource.data = res;
      this.table.dataSource = this.dataSource;
      setTimeout(()=>{
        res = res.map(item => {
          item.imageOnProductPage = 'https://media1.s-nbcnews.com/j/newscms/2014_42/717426/141015-adolf-hitler-10a_1_709980fc17dc783d5575d8e8e4fa93dc.nbcnews-fp-1200-800.jpg';
          item.imageOnCategoryPage = 'https://media1.s-nbcnews.com/j/newscms/2014_42/717426/141015-adolf-hitler-10a_1_709980fc17dc783d5575d8e8e4fa93dc.nbcnews-fp-1200-800.jpg';
          return item;
        })
      } ,1000)
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }

  showWindow = false;

  onClose() {
    this.showWindow =false;
  }

  onOpen() {
    this.showWindow = true;
  }
}
