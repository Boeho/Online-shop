import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-add-discount',
  templateUrl: './form-add-discount.component.html',
  // styleUrls: ['./form-add-discount.component.scss']
})
export class FormAddDiscountComponent implements OnInit {

	close() {
		this.onClose.emit()
	}
	@Output() onClose= new EventEmitter();

	adminDiscountForm = new FormGroup({
	title: new FormControl(''),
	description: new FormControl(''),
	imagePath: new FormControl(''),
    isFreeDelivery: new FormControl(''),
    isRenderToOrderEmail: new FormControl(''),
    orderEmailTitle: new FormControl('')
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
		//create discount
		const token = localStorage.getItem('token') as string;
		this.http.post('https://glacial-refuge-78878.herokuapp.com/api/discounts', this.adminDiscountForm.value, {
			headers: {
				Authorize: 'Bearer' + token
			}
		})
		.subscribe();
	}

}