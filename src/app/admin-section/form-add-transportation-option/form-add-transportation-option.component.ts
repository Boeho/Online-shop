import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-add-transportation-option',
  templateUrl: './form-add-transportation-option.component.html',
  // styleUrls: ['./form-add-transportation-option.component.scss']
})
export class FormAddTransportationOptionComponent implements OnInit {

	close() {
		this.onClose.emit()
	}
	@Output() onClose= new EventEmitter();

	adminTransportationOptionForm = new FormGroup({
		title: new FormControl(''),
		priceTypeId: new FormControl(''),
	})

	public url: any;
	public msg = "";
	
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
		//create transportation option
		const token = localStorage.getItem('token') as string
		this.http.post('https://glacial-refuge-78878.herokuapp.com/api/transportation-options', this.adminTransportationOptionForm.value, {
			headers:{
				Authorize: 'Bearer' + token
			}
		})
		.subscribe();
	}

}
