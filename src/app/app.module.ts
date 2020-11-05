import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexModule } from '@angular/flex-layout';
import { CommonServicesModule } from './common-services/common-services.module';
import { CommonSimplecontrolsModule } from './common-simplecontrols/common-simplecontrols.module';
import { CommonControlsModule } from './common-controls/common-controls.module';
import { BuControlsModule } from './bu-controls/bu-controls.module';
import { HomePageComponent } from './controls/home-page/home-page.component';
import { TermsConditionsPanelComponent } from './controls/terms-conditions-panel/terms-conditions-panel.component';
import { ApplicationCitizenWizardComponent } from './controls/application-citizen-wizard/application-citizen-wizard.component';
import { CitizenCalculationPanelComponent } from './controls/citizen-calculation-panel/citizen-calculation-panel.component';
import { ApplicationEmployeeWizardComponent } from './controls/application-employee-wizard/application-employee-wizard.component';
import { EmployeeCalculationPanelComponent } from './controls/employee-calculation-panel/employee-calculation-panel.component';
import { CalculationSummaryPanelComponent } from './controls/calculation-summary-panel/calculation-summary-panel.component';
import { AdditionalInfoPanelComponent } from './controls/additional-info-panel/additional-info-panel.component';
import { NotAcceptedTcPageComponent } from './controls/not-accepted-tc-page/not-accepted-tc-page.component';
import { SummaryPageComponent } from './controls/summary-page/summary-page.component';
import { PaymentsModule } from './payments/payments.module';
import { PaymentComponent } from './controls/payment/payment.component';
import { NotAcceptedComponent } from './controls/not-accepted/not-accepted.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TermsConditionsPanelComponent,
    ApplicationCitizenWizardComponent,
    CitizenCalculationPanelComponent,
    ApplicationEmployeeWizardComponent,
    EmployeeCalculationPanelComponent,
    CalculationSummaryPanelComponent,
    AdditionalInfoPanelComponent,
    NotAcceptedTcPageComponent,
    SummaryPageComponent,
    AdditionalInfoPanelComponent,
    PaymentComponent,
    NotAcceptedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatStepperModule,
    FlexModule,
    CommonServicesModule,
    CommonSimplecontrolsModule,
    CommonControlsModule,
    BuControlsModule,
    PaymentsModule
  ],
  exports: [TermsConditionsPanelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
