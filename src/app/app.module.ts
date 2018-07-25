import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    MlbModule,
    CONST_ROUTING
  ],
  providers: [SharedService, HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
