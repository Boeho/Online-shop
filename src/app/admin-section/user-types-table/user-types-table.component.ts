import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserTypesTableDataSource, UserTypesTableItem } from './user-types-table-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-types-table',
  templateUrl: './user-types-table.component.html',
  styleUrls: ['./user-types-table.component.scss']
})

export class UserTypesTableComponent implements AfterViewInit, OnInit {

  constructor(private http:HttpClient) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UserTypesTableItem>;
  dataSource: UserTypesTableDataSource;
  page: number = 0;
  take: number = 25;

  displayedColumns = [ 'title', 'priceTypeId'];

  ngOnInit() {
    this.dataSource = new UserTypesTableDataSource();
    this.http.get<UserTypesTableItem[]>('https://glacial-refuge-78878.herokuapp.com/api/user-types')
    .subscribe(res=>{
      this.dataSource.data = res;
      this.table.dataSource = this.dataSource;
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
