import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { LogoComponent } from './components/navigation/logo/logo.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertComponent } from './components/alert/alert.component';
import {JwtInterceptor} from './services/authentication/jwt-inteceptor';
import {ErrorInterceptor} from './services/authentication/error-interceptor';
import { OAuthRedirectHandlerComponent } from './components/oauth-redirect-handler/oauth-redirect-handler.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    LoginComponent,
    NavigationComponent,
    HeaderComponent,
    SidenavListComponent,
    LogoComponent,
    RegisterComponent,
    AlertComponent,
    OAuthRedirectHandlerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatGridListModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
