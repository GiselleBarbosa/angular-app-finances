import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertsComponent } from 'src/app/shared/alerts/alerts.component';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.catchInputValues();
  }

  catchInputValues() {
  /* let name = this.formulario.controls.name.value;
    let email = this.formulario.controls.email.value;
    let password = this.formulario.controls.password.value; */
  }


  onSubmit() {
    if (this.formulario.valid) {
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

}
