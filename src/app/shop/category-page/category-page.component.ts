import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  values = '';
  testData: {
    description: string,
    imagePath: string,
    isOnHomePage: boolean,
    productCategoryId: number,
    title: string,
    titleOnCategoryPage: string,
    titleOnHomePage: string,
  }[];
  constructor(private http:HttpClient) { }
  

  ngOnInit(): void {
    this.http.get('https://glacial-refuge-78878.herokuapp.com/api/product-categories')
    .subscribe((res:any)=>{
        this.testData = res;
    });
  }
  onImageLoad(event: any){
    this.values = this.values = event.target.value 
    // console.log(btoa(image))

  }

}

