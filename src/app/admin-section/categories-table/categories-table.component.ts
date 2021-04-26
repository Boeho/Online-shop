import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CategoriesTableDataSource, CategoriesTableItem } from './categories-table-datasource';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements AfterViewInit, OnInit {

  constructor(private http:HttpClient) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CategoriesTableItem>;
  dataSource: CategoriesTableDataSource;
  page: number = 0;
  take: number = 25;

  displayedColumns = [ 'title', 'titleOnHomePage', 'titleOnCategoryPage', 'description', 'imagePath', 'actions'];

  ngOnInit() {
    this.dataSource = new CategoriesTableDataSource();
    this.http.get<CategoriesTableItem[]>('https://glacial-refuge-78878.herokuapp.com/api/product-categories')
    .subscribe(res=>{
      this.dataSource.data = res;
      this.table.dataSource = this.dataSource;
      setTimeout(()=>{
        res = res.map(item => {
          item.imagePath = 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'
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
