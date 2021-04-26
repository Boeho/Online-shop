import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface DiscountsTableItem {
  title: string,
  description: string,
  imagePath: string,
  isFreeDelivery: string,
  isRenderToOrderEmail: string,
  orderEmailTitle: string,
}

const EXAMPLE_DATA: DiscountsTableItem[] = [
  { title: 'title', description: 'description', isFreeDelivery: 'freeDelivery', isRenderToOrderEmail: 'emailRender', orderEmailTitle: 'emailTitle', imagePath: 'imageName'},
  { title: 'title', description: 'description', isFreeDelivery: 'freeDelivery', isRenderToOrderEmail: 'emailRender', orderEmailTitle: 'emailTitle', imagePath: 'imageName'},
  { title: 'title', description: 'description', isFreeDelivery: 'freeDelivery', isRenderToOrderEmail: 'emailRender', orderEmailTitle: 'emailTitle', imagePath: 'imageName'},
  { title: 'title', description: 'description', isFreeDelivery: 'freeDelivery', isRenderToOrderEmail: 'emailRender', orderEmailTitle: 'emailTitle', imagePath: 'imageName'},
  { title: 'title', description: 'description', isFreeDelivery: 'freeDelivery', isRenderToOrderEmail: 'emailRender', orderEmailTitle: 'emailTitle', imagePath: 'imageName'},
];

export class DiscountsTableDataSource extends DataSource<DiscountsTableItem> {


  data: DiscountsTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<DiscountsTableItem[]> {
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

  private getPagedData(data: DiscountsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: DiscountsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'title': return compare(+a.title, +b.title, isAsc);
        case 'isFreeDelivery': return compare(a.isFreeDelivery, b.isFreeDelivery, isAsc);
        case 'isRenderToOrderEmail': return compare(a.isRenderToOrderEmail, b.isRenderToOrderEmail, isAsc);
        case 'orderEmailTitle': return compare(a.orderEmailTitle, b.orderEmailTitle, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'imagePath': return compare(a.imagePath, b.imagePath, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
