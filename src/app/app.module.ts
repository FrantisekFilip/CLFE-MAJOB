import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexModule } from '@angular/flex-layout';
import { CommonSimplecontrolsModule } from './common-simplecontrols/common-simplecontrols.module';
import { HomePageComponent } from './controls/home-page/home-page.component';
import { TermsConditionsPanelComponent } from './controls/terms-conditions-panel/terms-conditions-panel.component';
import { ApplicationCitizenWizardComponent } from './controls/citizen/application-citizen-wizard/application-citizen-wizard.component';
import { CitizenCalculationFormComponent } from './controls/citizen/citizen-calculation-form/citizen-calculation-form.component';
import { ApplicationEmployeeWizardComponent } from './controls/employee/application-employee-wizard/application-employee-wizard.component';
import { EmployeeCalculationFormComponent } from './controls/employee/employee-calculation-form/employee-calculation-form.component';
import { AdditionalInfoFormComponent } from './controls/additional-info-form/additional-info-form.component';
import { NotAcceptedTcPageComponent } from './controls/not-accepted-tc-page/not-accepted-tc-page.component';
import { SummaryPageComponent } from './controls/summary-page/summary-page.component';
import { PaymentsModule } from './payments/payments.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TermsConditionsPanelComponent,
    ApplicationCitizenWizardComponent,
    CitizenCalculationFormComponent,
    ApplicationEmployeeWizardComponent,
    EmployeeCalculationFormComponent,
    AdditionalInfoFormComponent,
    NotAcceptedTcPageComponent,
    SummaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatStepperModule,
    FlexModule,
    CommonSimplecontrolsModule,
    PaymentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
