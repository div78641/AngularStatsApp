import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';

import { StandingsComponent } from './standings/standings.component';
import { RunsperhitComponent } from './runsperhit/runsperhit.component';
import { GamelogComponent } from './gamelog/gamelog.component';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatTableModule, MatSortModule, MatProgressSpinnerModule
  ],
  declarations: [StandingsComponent, RunsperhitComponent, GamelogComponent],
  exports: [StandingsComponent, RunsperhitComponent, GamelogComponent]
})
export class MlbModule { }
