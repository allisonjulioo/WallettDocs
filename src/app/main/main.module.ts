import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainComponent } from "./main.component";

// Angular CLI
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./main.route";

import { PdfViewerModule } from "ng2-pdf-viewer";
import { ContentDocComponent } from "./content-doc/content-doc.component";
import { DownloadDocsOptionsComponent } from "./download-docs-options/download-docs-options.component";
import { EditDocsComponent } from "./edit-docs/edit-docs.component";
import { ModalSearchComponent } from "./modal-search/modal-search.component";
import { ProfileComponent } from "./profile/profile.component";

import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule, MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MainComponent,
    ContentDocComponent,
    ProfileComponent,
    ModalSearchComponent,
    DownloadDocsOptionsComponent,
    EditDocsComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
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
    MatSelectModule,
    MatTableModule,
    MatBadgeModule,
    MatRippleModule,
    PdfViewerModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [MainComponent],
  entryComponents: [
    ModalSearchComponent,
    DownloadDocsOptionsComponent,
    ContentDocComponent,
  ],
})
export class MainModule {}
