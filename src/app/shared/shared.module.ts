import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { MessageErrorComponent } from './message-error/message-error.component';


@NgModule({
  declarations: [
    MessageErrorComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule, 
    MessageErrorComponent
  ]
})
export class SharedModule { }
