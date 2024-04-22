import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CVComponent } from './components/cv/cv.component';
import { ExportComponent } from './components/export/export.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cv', component: CVComponent },
    { path: 'export', component: ExportComponent },
];
