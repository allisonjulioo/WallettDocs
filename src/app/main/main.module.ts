import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component'; 
import { ContentDocComponent } from './content-doc/content-doc.component'; 
// Angular CLI 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { ROUTES } from './main.route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
 

import { 
  MatButtonModule, 
  MatCardModule, 
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';


@NgModule({
  declarations: [
    MainComponent, 
    ContentDocComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpModule,  
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [ 
  ],
  bootstrap: [MainComponent], 
})
export class MainModule { }
