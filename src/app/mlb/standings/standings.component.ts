import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OverallStandingsRoot } from '../interfaces/overall.standings';
import { LeagueStandingsRoot } from '../interfaces/league.standings';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  title = 'MLB Standings';
  displayOverall = true;
  displayLeague = false;
  overallStandings: OverallStandingsRoot;
  leagueStandings: LeagueStandingsRoot;
  isLoadingResults = true;
  faSync = faSync;

  constructor(private sharedService: SharedService ) { }

  ngOnInit() {
    this.sharedService
      .getOverallStandings()
      .subscribe((data: OverallStandingsRoot) => {
        this.overallStandings = data;
        this.isLoadingResults = false;
      });
    this.sharedService
      .getLeagueStandings()
      .subscribe((leagueData: LeagueStandingsRoot) => {
        this.leagueStandings = leagueData;
        this.isLoadingResults = false;
      });
  }
}
