import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { MessageErrorComponent } from './message-error/message-error.component';
import { TypePipe } from './pipes/type.pipe';


@NgModule({
  declarations: [	
    MessageErrorComponent,
    TypePipe
   ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule, 
    MessageErrorComponent, 
    TypePipe
  ]
})
export class SharedModule { }
