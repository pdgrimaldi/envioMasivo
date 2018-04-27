import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'angular2-datatable';
import { LoadingModule } from 'ngx-loading';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CampaignService } from './campaign.service';
import { AgendaService } from './agenda.service';
import { LoginComponent } from './login/login.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OwlDateTimeIntl, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { SideNavMenuModule } from 'mat-sidenav-menu';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule } from '@angular/material';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-list/campaign-detail/campaign-detail.component';
import { RecipientsListComponent } from './recipients-list/recipients-list.component';

// here is the default text string
export const DefaultIntl = {
  /** A label for the up second button (used by screen readers).  */
  upSecondLabel: 'Add a second',

  /** A label for the down second button (used by screen readers).  */
  downSecondLabel: 'Minus a second',

  /** A label for the up minute button (used by screen readers).  */
  upMinuteLabel: 'Add a minute',

  /** A label for the down minute button (used by screen readers).  */
  downMinuteLabel: 'Minus a minute',

  /** A label for the up hour button (used by screen readers).  */
  upHourLabel: 'Add a hour',

  /** A label for the down hour button (used by screen readers).  */
  downHourLabel: 'Minus a hour',

  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel: 'Previous month',

  /** A label for the next month button (used by screen readers). */
  nextMonthLabel: 'Next month',

  /** A label for the previous year button (used by screen readers). */
  prevYearLabel: 'Previous year',

  /** A label for the next year button (used by screen readers). */
  nextYearLabel: 'Next year',

  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel: 'Previous 21 years',

  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel: 'Next 21 years',

  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel: 'Change to month view',

  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel: 'Choose month and year',

  /** A label for the cancel button */
  cancelBtnLabel: 'Cancelar',

  /** A label for the set button */
  setBtnLabel: 'Hecho',

  /** A label for the range 'from' in picker info */
  rangeFromLabel: 'Desde',

  /** A label for the range 'to' in picker info */
  rangeToLabel: 'Hasta',

  /** A label for the hour12 button (AM) */
  hour12AMLabel: 'AM',

  /** A label for the hour12 button (PM) */
  hour12PMLabel: 'PM',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CampaignListComponent,
    CampaignDetailComponent,
    RecipientsListComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SideNavMenuModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
    DataTableModule,
    LoadingModule
  ],
  providers: [
    CampaignService,
    AgendaService,
    { provide: OwlDateTimeIntl, useValue: DefaultIntl },
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
