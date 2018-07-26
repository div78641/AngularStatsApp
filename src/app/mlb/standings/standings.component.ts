import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { MySportsFeedsMlbOverallStandingsResponse } from '../MySportsFeedInterfaces';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  title = 'MLB Standings';
  mySFMlbOSR: MySportsFeedsMlbOverallStandingsResponse;

  constructor(private sharedService: SharedService ) { }

  ngOnInit() {
    this.sharedService
      .getOverallStandings()
      .subscribe((data: MySportsFeedsMlbOverallStandingsResponse) => {
        this.mySFMlbOSR = data;
      });
  }

}
