import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TransportationOptionsTableDataSource, TransportationOptionsTableItem } from './transportation-options-table-datasource';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transportation-options-table',
  templateUrl: './transportation-options-table.component.html',
  styleUrls: ['./transportation-options-table.component.scss']
})

export class TransportationOptionsTableComponent implements AfterViewInit, OnInit {

  constructor(private http:HttpClient) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TransportationOptionsTableItem>;
  dataSource: TransportationOptionsTableDataSource;
  page: number = 0;
  take: number = 25;

  displayedColumns = [ 'title'];

  ngOnInit() {
    this.dataSource = new TransportationOptionsTableDataSource();
    this.http.get<TransportationOptionsTableItem[]>('https://glacial-refuge-78878.herokuapp.com/api/transportation-options')
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

