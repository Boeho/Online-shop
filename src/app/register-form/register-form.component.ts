import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

	close() {
		this.onClose.emit()
	}
	@Output() onClose= new EventEmitter();

	adminRegisterForm = new FormGroup({
		username: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
	})

	constructor(private http: HttpClient, private _router: Router) {

	}

	ngOnInit(): void {
	}
  
	onSubmit() {
		const forma = this.adminRegisterForm.value;
		forma.typeId = 1
		this.http.post('https://glacial-refuge-78878.herokuapp.com/api/users/register', forma)
		.subscribe(
			res => {
				console.log(res)
			}, 
			err => {
				console.log(err)
			}
		);
	}

}

