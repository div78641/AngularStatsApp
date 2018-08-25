import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { MlbModule } from './mlb/mlb.module';
import { AppRoutingModule } from './app-routing.module';

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
    UiModule,
    MlbModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
