import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss'],
})
export class MessageErrorComponent {
  public title: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
  }
}
