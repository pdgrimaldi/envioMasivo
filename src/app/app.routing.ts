import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'index.html', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
