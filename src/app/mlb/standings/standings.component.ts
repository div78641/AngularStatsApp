import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OverallTeamStandings } from '../MySportsFeedInterfaces';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  title = 'MLB Standings';
  overallStandings: OverallTeamStandings;

  constructor(private sharedService: SharedService ) { }

  ngOnInit() {
    this.sharedService
      .getOverallStandings()
      .subscribe((data: OverallTeamStandings) => {
        this.overallStandings.lastUpdatedOn = data.lastUpdatedOn;
        console.log(this.overallStandings);
      });
  }

}
