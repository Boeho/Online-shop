import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface UserTypesTableItem {
  title: string,
  priceTypeId: string,
}

const EXAMPLE_DATA: UserTypesTableItem[] = [
  { title: 'title', priceTypeId: 'priceTypeId'},
  { title: 'title', priceTypeId: 'priceTypeId'},
  { title: 'title', priceTypeId: 'priceTypeId'},
  { title: 'title', priceTypeId: 'priceTypeId'},
  { title: 'title', priceTypeId: 'priceTypeId'},
];

export class UserTypesTableDataSource extends DataSource<UserTypesTableItem> {


  data: UserTypesTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<UserTypesTableItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: UserTypesTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: UserTypesTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'title': return compare(+a.title, +b.title, isAsc);
        case 'priceTypeId': return compare(a.priceTypeId, b.priceTypeId, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
