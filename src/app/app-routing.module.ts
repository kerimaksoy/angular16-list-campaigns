import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NewcampaignsComponent } from './newcampaigns/newcampaigns.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'campaigns', component: CampaignsComponent, canActivate: [authGuard] },
  { path: 'newcampaign', component: NewcampaignsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/campaigns', pathMatch: 'full' },
  { path: '**', redirectTo: '/campaigns' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
