import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CVComponent } from './components/cv/cv.component';
import { LinkedinCallbackComponent } from './components/linkedin-callback/linkedin-callback.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cv', component: CVComponent },
      { path: 'auth/linkedin/callback', component: LinkedinCallbackComponent }
];
