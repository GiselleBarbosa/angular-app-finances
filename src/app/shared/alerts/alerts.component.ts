import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
  title: string = 'Cadastrado realizado';
  data: string = 'Usuário informado foi cadastrado com sucesso!';

  constructor(@Inject(MAT_DIALOG_DATA) public text: string) {}

  ngOnInit(): void {}
}
