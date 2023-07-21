import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from './material/material.module';
import { StatusPipe } from './pipes/status.pipe';
import { TypePipe } from './pipes/type.pipe';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';

@NgModule({
  declarations: [
    TypePipe,
    StatusPipe,
    ButtonsComponent,
    AlertsComponent,
    DialogMessageComponent,
  ],
  imports: [MaterialModule, CommonModule],
  exports: [
    MaterialModule,
    TypePipe,
    StatusPipe,
    ButtonsComponent,
    AlertsComponent,
  ],
})
export class SharedModule {}
