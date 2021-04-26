import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DiscountsTableDataSource, DiscountsTableItem } from './discount-table-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discounts-table',
  templateUrl: './discounts-table.component.html',
  styleUrls: ['./discounts-table.component.scss']
})

export class DiscountsTableComponent implements AfterViewInit, OnInit {

  constructor(private http:HttpClient) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DiscountsTableItem>;
  dataSource: DiscountsTableDataSource;
  page: number = 0;
  take: number = 25;

  displayedColumns = [ 'title', 'isFreeDelivery', 'isRenderToOrderEmail', 'orderEmailTitle', 'description', 'imagePath', 'actions'];

  ngOnInit() {
    this.dataSource = new DiscountsTableDataSource();
    this.http.get<DiscountsTableItem[]>('https://glacial-refuge-78878.herokuapp.com/api/discounts')
    .subscribe(res=>{
      this.dataSource.data = res;
      this.table.dataSource = this.dataSource;
      setTimeout(()=>{
        res = res.map(item => {
          item.imagePath = 'https://media1.s-nbcnews.com/j/newscms/2014_42/717426/141015-adolf-hitler-10a_1_709980fc17dc783d5575d8e8e4fa93dc.nbcnews-fp-1200-800.jpg'
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
