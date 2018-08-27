import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StandingsComponent } from './standings/standings.component';
import { RunsperhitComponent } from './runsperhit/runsperhit.component';
import { GamelogComponent } from './gamelog/gamelog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'mlb', component: HomeComponent },
      { path: 'mlb/standings', component: StandingsComponent },
      { path: 'mlb/gamelog', component: GamelogComponent },
      { path: 'mlb/runsperhit', component: RunsperhitComponent }
      ])
  ],
  exports: [ RouterModule ]
})
export class MlbRoutingModule { }
