import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginModalComponent } from './core/login-modal/login-modal.component';
import { RetryHttpRequestsInterceptorInterceptor } from './shared/interceptors/retry-http-requests-interceptor.interceptor';
import { SharedModule } from './shared/shared.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginModalComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryHttpRequestsInterceptorInterceptor,
      multi: true,
    }, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
