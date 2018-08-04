import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';

import { StandingsComponent } from './standings/standings.component';
import { RunsperhitComponent } from './runsperhit/runsperhit.component';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatTableModule, MatSortModule, MatProgressSpinnerModule
  ],
  declarations: [StandingsComponent, RunsperhitComponent],
  exports: [StandingsComponent, RunsperhitComponent]
})
export class MlbModule { }
