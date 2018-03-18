import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { SportsFormComponent } from './sports-form/sports-form.component';
import { ThankyouFormComponent } from './thankyou-form/thankyou-form.component';
import { CustomFormsModule } from 'ng2-validation';


@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    SportsFormComponent,
    ThankyouFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path: '', component: DetailsFormComponent },
      { path: 'sport', component: SportsFormComponent},
      { path: 'thankyou', component: ThankyouFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
