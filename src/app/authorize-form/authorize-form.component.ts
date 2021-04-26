import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authorize-form',
  templateUrl: './authorize-form.component.html',
  styleUrls: ['./authorize-form.component.scss']
})
export class AuthorizeFormComponent implements OnInit {

	close() {
		this.onClose.emit()
	}
	@Output() onClose= new EventEmitter();

	adminLoginForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl('')
	})

	constructor(private http:HttpClient) {

	}

	ngOnInit(): void {
	}
  
	onSubmit() {
		debugger
		this.http.post('https://glacial-refuge-78878.herokuapp.com/api/users/login', this.adminLoginForm.value)
		.subscribe();
	}

}


