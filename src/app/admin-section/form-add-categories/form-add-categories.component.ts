import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-add-categories',
  templateUrl: './form-add-categories.component.html',
//   styleUrls: ['./form-add-categories.component.scss']
})
export class FormAddCategoriesComponent implements OnInit {

	close() {
		this.onClose.emit()
	}
	@Output() onClose= new EventEmitter();

	adminCategoryForm = new FormGroup({
		title: new FormControl(''),
		titleOnHomePage: new FormControl(''),
		titleOnCategoryPage: new FormControl(''),
		description: new FormControl(''),
		imagePath: new FormControl(''),
		isOnHomePage: new FormControl('')
	})

	url: any;
	msg = "";
	
	selectFile(event: any) {
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

	constructor(private http:HttpClient) {

	}

	ngOnInit(): void {

	}
	
	onSubmit() {
		//creating category
		const token = localStorage.getItem('token') as string;
		this.http.post('https://glacial-refuge-78878.herokuapp.com/api/product-categories', this.adminCategoryForm.value, {

			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.subscribe();
	}

}
