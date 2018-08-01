import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { MlbModule } from './mlb/mlb.module';
import { CONST_ROUTING } from './app.routing';

import { SharedService } from './shared.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    UiModule,
    MlbModule,
    CONST_ROUTING
  ],
  providers: [SharedService, HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
