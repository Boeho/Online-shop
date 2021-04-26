import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface PostsTableItem {
  title: string,
  content: string,
  imagePath: string,
  createdById: string,
}

const EXAMPLE_DATA: PostsTableItem[] = [
  { title: 'title', content: 'content', createdById: 'createdById', imagePath: 'imageName'},
  { title: 'title', content: 'content', createdById: 'createdById', imagePath: 'imageName'},
  { title: 'title', content: 'content', createdById: 'createdById', imagePath: 'imageName'},
  { title: 'title', content: 'content', createdById: 'createdById', imagePath: 'imageName'},
  { title: 'title', content: 'content', createdById: 'createdById', imagePath: 'imageName'},
];

export class PostsTableDataSource extends DataSource<PostsTableItem> {


  data: PostsTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<PostsTableItem[]> {
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

  private getPagedData(data: PostsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: PostsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'title': return compare(+a.title, +b.title, isAsc);
        case 'content': return compare(a.content, b.content, isAsc);
        case 'createdById': return compare(a.createdById, b.createdById, isAsc);
        case 'imagePath': return compare(a.imagePath, b.imagePath, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
