import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component'; 

// Angular CLI 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'; 
import { ROUTES } from './main.route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ContentDocComponent } from './content-doc/content-doc.component'; 
import { ProfileComponent } from './profile/profile.component';
import { ModalSearchComponent } from './modal-search/modal-search.component'; 
import { DownloadDocsOptionsComponent } from './download-docs-options/download-docs-options.component';
import { EditDocsComponent } from './edit-docs/edit-docs.component';

import { 
  MatButtonModule, 
  MatCardModule, 
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatSnackBarModule, 
  MatBottomSheetModule,
  MatListModule,
  MatPaginatorModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material';


@NgModule({
  declarations: [
    MainComponent, 
    ContentDocComponent,
    ProfileComponent,
    ModalSearchComponent,  
    DownloadDocsOptionsComponent, EditDocsComponent
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
    MatBottomSheetModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatListModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [ 
  ],
  bootstrap: [MainComponent], 
  entryComponents: [ModalSearchComponent, DownloadDocsOptionsComponent],
})
export class MainModule { }
