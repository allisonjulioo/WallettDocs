import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainModule } from './main/main.module';


// Angular CLI 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { ROUTES } from './app.route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';  
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ModalSearchComponent } from './modal-search/modal-search.component';

import { 
  MatButtonModule, 
  MatCardModule, 
  MatInputModule,
  MatDialogModule
} from '@angular/material'; 


@NgModule({
  declarations: [
    AppComponent, 
    SplashComponent,
    RegisterComponent, 
    LoginComponent, 
    NavHeaderComponent, 
    ModalSearchComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    MainModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpModule,  
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalSearchComponent],
})
export class AppModule { }
