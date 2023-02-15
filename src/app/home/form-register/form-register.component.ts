import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
  });

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addClassValidate;
  }

  catchInputValues() {
    /* let name = this.formulario.controls.name.value;
      let email = this.formulario.controls.email.value;
      let password = this.formulario.controls.password.value; */
  }


  onSubmit(e: Event) {
    if (this.formulario.valid) {
      e.preventDefault();
      /* Exibindo alerta de cadastro feito com sucesso */
      this.dialog.open(AlertsComponent);
      this.reset();
    } else {
      this.dialog.open(AlertsComponent);
    }
  }

  /* Resetando formulario apos envio */
  reset() {
    this.formulario.reset();
  }

  /* Checando formulario  */
  checkValidTouched(campo: string) {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }

  /* Adicionando class invalid no template*/
  addClassValidate(campo: string) {
    return {
      'is-invalid': this.checkValidTouched(campo)
    };
  }

}
