import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StandingsComponent } from './standings/standings.component';
import { RunsperhitComponent } from './runsperhit/runsperhit.component';
import { GamelogComponent } from './gamelog/gamelog.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'mlb', redirectTo: 'home', pathMatch: 'full' },
      { path: 'mlb/standings', component: StandingsComponent },
      { path: 'mlb/gamelog', component: GamelogComponent },
      { path: 'mlb/runsperhit', component: RunsperhitComponent }
      ])
  ],
  exports: [ RouterModule ]
})
export class MlbRoutingModule { }
