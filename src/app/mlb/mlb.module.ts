import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StandingsComponent } from './standings/standings.component';
import { RunsperhitComponent } from './runsperhit/runsperhit.component';
import { GamelogComponent } from './gamelog/gamelog.component';
import { MlbRoutingModule } from './/mlb-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatTableModule, MatSortModule, MatProgressSpinnerModule, FontAwesomeModule, MlbRoutingModule
  ],
  declarations: [StandingsComponent, RunsperhitComponent, GamelogComponent, HomeComponent],
  exports: [StandingsComponent, RunsperhitComponent, GamelogComponent]
})
export class MlbModule { }
