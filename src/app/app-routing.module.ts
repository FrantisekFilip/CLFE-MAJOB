import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationCitizenWizardComponent } from './controls/application-citizen-wizard/application-citizen-wizard.component';
import { ApplicationEmployeeWizardComponent } from './controls/application-employee-wizard/application-employee-wizard.component';
import { HomePageComponent } from './controls/home-page/home-page.component';
import { PaymentComponent } from './controls/payment/payment.component';


export const routeHome = 'home';
export const routeCitizenWizard = 'citizen-app';
export const routeEmployeeWizard = 'employee-app';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'citizen-app', component: ApplicationCitizenWizardComponent },
  { path: 'employee-app', component: ApplicationEmployeeWizardComponent },
  { path: 'payment', component: PaymentComponent},
  { path: '**', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
