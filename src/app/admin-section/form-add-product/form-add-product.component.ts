import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
//   styleUrls: ['./form-add-product.component.scss']
})
export class FormAddProductComponent implements OnInit {

	@Output() onClose= new EventEmitter();

  public adminProductForm = new FormGroup({
    title: new FormControl(''),
		// categoryId: 0,
		// sizeId: 0,
		// colorId: 0,
		// imageOnProductPage: '',
		// imageOnCategoryPage: '',
    // isConsiderDiscount: false,
		// inStore: false,
		// prices: [],
    // photos: []
  })
  
	public url: any;
	public msg = "";

  constructor(private http:HttpClient) {
	}

  ngOnInit(): void {

	}

	public selectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

  public close() {
		this.onClose.emit()
	}

	public onSubmit() {
		//create product
		const token = localStorage.getItem('token') as string
		this.http.post('https://glacial-refuge-78878.herokuapp.com/api/products', this.adminProductForm.value, {
			headers:{
				Authorize: 'Bearer' + token
			}
		})
		.subscribe();
	}

}
