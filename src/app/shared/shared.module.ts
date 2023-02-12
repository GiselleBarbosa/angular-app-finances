import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { MessageErrorComponent } from './message-error/message-error.component';
import { TypePipe } from './pipes/type.pipe';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [	
    MessageErrorComponent,
    TypePipe,
    ButtonsComponent
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
