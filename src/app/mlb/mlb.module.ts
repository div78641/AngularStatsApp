import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsComponent } from './standings/standings.component';
import { RunsperhitComponent } from './runsperhit/runsperhit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StandingsComponent, RunsperhitComponent],
  exports: [StandingsComponent, RunsperhitComponent]
})
export class MlbModule { }
