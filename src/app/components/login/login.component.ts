import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
 
export class LoginComponent implements OnInit {
    meuFormulario: FormGroup = new FormGroup({});

  ngOnInit() {
    this.meuFormulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submitForm() {
    if (this.meuFormulario.valid) {
      console.log(this.meuFormulario.value);
    }
  }

}
