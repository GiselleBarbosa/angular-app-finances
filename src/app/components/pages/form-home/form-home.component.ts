import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  catchInputValues() {
    let name = this.formulario.controls.name.value;
    let email = this.formulario.controls.email.value;
    let password = this.formulario.controls.password.value;
    let passwordConfirm = this.formulario.controls.passwordConfirm.value;
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      console.log("ENVIADO COM SUCESSO");
    }
    else {
      console.log("formulario INVALIDO");
    }
  }
}
