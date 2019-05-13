import { AuthGuard } from './guards/auth.guard';
import { Routes } from '@angular/router' 
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';


export const ROUTES: Routes = [ 
    { path: 'main', component: MainComponent,  pathMatch: 'full' }, 
    { path: 'splash', component: SplashComponent,  pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent,  pathMatch: 'full' }, 
    { path: 'register', component: RegisterComponent,  pathMatch: 'full' }, 
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    { path: '**', redirectTo: 'splash', pathMatch: 'full' }, 


]