import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationCitizenWizardComponent } from './controls/citizen/application-citizen-wizard/application-citizen-wizard.component';
import { ApplicationEmployeeWizardComponent } from './controls/employee/application-employee-wizard/application-employee-wizard.component';
import { HomePageComponent } from './controls/home-page/home-page.component';
import { PaymentMethodComponent } from './payments/payment-method/payment-method.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'citizen-app', component: ApplicationCitizenWizardComponent },
  { path: 'employee-app', component: ApplicationEmployeeWizardComponent },
  { path: 'payment', component: PaymentMethodComponent},
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
