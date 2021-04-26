import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface CategoriesTableItem {
  title: string,
  titleOnHomePage: string,
  titleOnCategoryPage: string,
  description: string,
  imagePath: string
}

const EXAMPLE_DATA: CategoriesTableItem[] = [
  { title: 'title', titleOnHomePage: 'titleHome', titleOnCategoryPage: 'titleCategory', description: 'description', imagePath: 'imageName'},
  { title: 'title', titleOnHomePage: 'titleHome', titleOnCategoryPage: 'titleCategory', description: 'description', imagePath: 'imageName'},
  { title: 'title', titleOnHomePage: 'titleHome', titleOnCategoryPage: 'titleCategory', description: 'description', imagePath: 'imageName'},
  { title: 'title', titleOnHomePage: 'titleHome', titleOnCategoryPage: 'titleCategory', description: 'description', imagePath: 'imageName'},
  { title: 'title', titleOnHomePage: 'titleHome', titleOnCategoryPage: 'titleCategory', description: 'description', imagePath: 'imageName'},
];

export class CategoriesTableDataSource extends DataSource<CategoriesTableItem> {


  data: CategoriesTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<CategoriesTableItem[]> {
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

  private getPagedData(data: CategoriesTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: CategoriesTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'title': return compare(+a.title, +b.title, isAsc);
        case 'titleOnHomePage': return compare(a.titleOnHomePage, b.titleOnHomePage, isAsc);
        case 'titleOnCategoryPage': return compare(a.titleOnCategoryPage, b.titleOnCategoryPage, isAsc);
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
