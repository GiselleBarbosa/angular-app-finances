import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginModalComponent } from './core/components/login-modal/login-modal.component';
import { SharedModule } from './shared/shared.module';

import { environment } from 'src/environments/environment';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginModalComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebase)


  ],
  exports: [AngularFireModule, HeaderComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
