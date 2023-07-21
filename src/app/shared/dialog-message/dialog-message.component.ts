import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from '../models/dialog.model';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss'],
})
export class DialogMessageComponent {
  @Input() title: string;
  @Input() message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Dialog) {
    this.title = data.title;
    this.message = data.message;
  }

}
