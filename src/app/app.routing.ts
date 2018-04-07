import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-list/campaign-detail/campaign-detail.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'index.html', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'campaign-list', component: CampaignListComponent },
  { path: 'campaign-detail/:campaign_id', component: CampaignDetailComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
