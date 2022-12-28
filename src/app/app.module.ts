import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MainModule } from "./main/main.module";

// Angular CLI
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.route";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavHeaderComponent } from "./nav-header/nav-header.component";
import { RegisterComponent } from "./register/register.component";
import { SplashComponent } from "./splash/splash.component";

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    RegisterComponent,
    LoginComponent,
    NavHeaderComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
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
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
