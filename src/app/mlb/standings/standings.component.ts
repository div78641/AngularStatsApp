import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OverallStandingsRoot } from '../interfaces/overall.standings';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  title = 'MLB Standings';
  overallStandings: OverallStandingsRoot;

  constructor(private sharedService: SharedService ) { }

  ngOnInit() {
    this.sharedService
      .getOverallStandings()
      .subscribe((data: OverallStandingsRoot) => {
        this.overallStandings = data;
      });
  }

}
