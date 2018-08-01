import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { StandingsComponent } from './standings/standings.component';
import { RunsperhitComponent } from './runsperhit/runsperhit.component';

@NgModule({
  imports: [
    CommonModule, MatTableModule
  ],
  declarations: [StandingsComponent, RunsperhitComponent],
  exports: [StandingsComponent, RunsperhitComponent]
})
export class MlbModule { }
