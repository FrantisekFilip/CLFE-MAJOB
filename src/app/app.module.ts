import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexModule } from '@angular/flex-layout';
import { CommonServicesModule } from './common-services/common-services.module';
import { CommonControlsModule } from './common-controls/common-controls.module';
import { BuControlsModule } from './bu-controls/bu-controls.module';
import { HomePageComponent } from './controls/home-page/home-page.component';
import { TermsConditionsPanelComponent } from './controls/terms-conditions-panel/terms-conditions-panel.component';
import { CitizenCalculationPanelComponent } from './controls/citizen-calculation-panel/citizen-calculation-panel.component';
import { EmployeeCalculationPanelComponent } from './controls/employee-calculation-panel/employee-calculation-panel.component';
import { CalculationSummaryPanelComponent } from './controls/calculation-summary-panel/calculation-summary-panel.component';
import { AdditionalInfoPanelComponent } from './controls/additional-info-panel/additional-info-panel.component';
import { SummaryPageComponent } from './controls/summary-page/summary-page.component';
import { PaymentsModule } from './payments/payments.module';
import { ApplicationWizardComponent } from './controls/application-wizard/application-wizard.component';
import { EmployeeApplicationPanelComponent } from './controls/employee-application-panel/employee-application-panel.component';
import { CitizenApplicationPanelComponent } from './controls/citizen-application-panel/citizen-application-panel.component';
import { CitizenApplicationPageComponent } from './controls/citizen-application-page/citizen-application-page.component';
import { EmployeeApplicationPageComponent } from './controls/employee-application-page/employee-application-page.component';
import { BranchVisitPageComponent } from './controls/branch-visit-page/branch-visit-page.component';
import { PaymentPageComponent } from './controls/payment-page/payment-page.component';
import { FinalPageComponent } from './controls/final-page/final-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TermsConditionsPanelComponent,
    CitizenCalculationPanelComponent,
    EmployeeCalculationPanelComponent,
    CalculationSummaryPanelComponent,
    AdditionalInfoPanelComponent,
    SummaryPageComponent,
    AdditionalInfoPanelComponent,
    ApplicationWizardComponent,
    EmployeeApplicationPanelComponent,
    CitizenApplicationPanelComponent,
    CitizenApplicationPageComponent,
    EmployeeApplicationPageComponent,
    BranchVisitPageComponent,
    PaymentPageComponent,
    FinalPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatStepperModule,
    FlexModule,
    CommonServicesModule,
    CommonControlsModule,
    BuControlsModule,
    PaymentsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
