import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationCitizenWizardComponent } from './controls/application-citizen-wizard/application-citizen-wizard.component';
import { ApplicationEmployeeWizardComponent } from './controls/application-employee-wizard/application-employee-wizard.component';
import { HomePageComponent } from './controls/home-page/home-page.component';
import { PaymentMethodComponent } from './payments/payment-method/payment-method.component';

export const routeHome = 'home';
export const routeCitizenWizard = 'citizen-app';
export const routeEmployeeWizard = 'employee-app';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: routeHome },
  { path: routeHome, component: HomePageComponent },
  { path: routeCitizenWizard, component: ApplicationCitizenWizardComponent },
  { path: routeEmployeeWizard, component: ApplicationEmployeeWizardComponent },
  { path: 'payment', component: PaymentMethodComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
