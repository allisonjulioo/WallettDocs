import { Routes } from '@angular/router'  
import { ProfileComponent } from './profile/profile.component';


export const ROUTES: Routes = [   
    {path : 'profile', component: ProfileComponent, pathMatch: 'full'},
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '*', redirectTo: 'main', pathMatch: 'full' }, 


]