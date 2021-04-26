import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface ProductsItem {
  title: string,
  categoryId: string,
  sizeId: string,
  colorId: string,
  imageOnProductPage: string,
  imageOnCategoryPage: string,
  isConsiderDiscount: string,
  inStore: number,
  productId: number,
  priceTypeId: number,
  value: number
  titlePhoto: string,
  imagePath: string,
  photoProductId: number
}

const EXAMPLE_DATA: ProductsItem[] = [

];

export class ProductsDataSource extends DataSource<ProductsItem> {
  data: ProductsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<ProductsItem[]> {
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

  private getPagedData(data: ProductsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: ProductsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        // case 'id': return compare(+a.id, +b.id, isAsc);
        case 'title': return compare(+a.title, +b.title, isAsc);
        case 'categoryId': return compare(a.categoryId, b.categoryId, isAsc);
        case 'sizeId': return compare(a.sizeId, b.sizeId, isAsc);
        case 'colorId': return compare(a.colorId, b.colorId, isAsc);
        case 'imageOnProductPage': return compare(a.imageOnProductPage, b.imageOnProductPage, isAsc);
        case 'imageOnCategoryPage': return compare(a.imageOnCategoryPage, b.imageOnCategoryPage, isAsc);
        case 'isConsiderDiscount': return compare(a.isConsiderDiscount, b.isConsiderDiscount, isAsc);
        case 'inStore': return compare(a.inStore, b.inStore, isAsc);
        case 'productId': return compare(a.productId, b.productId, isAsc);
        case 'priceTypeId': return compare(a.priceTypeId, b.priceTypeId, isAsc);
        case 'value': return compare(a.value, b.value, isAsc);
        case 'titlePhoto': return compare(a.titlePhoto, b.titlePhoto, isAsc);
        case 'imagePath': return compare(a.imagePath, b.imagePath, isAsc);
        case 'photoProductId': return compare(a.photoProductId, b.photoProductId, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
