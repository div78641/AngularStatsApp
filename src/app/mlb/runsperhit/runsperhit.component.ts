import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OverallStandingsRoot } from '../interfaces/overall.standings';
import { TeamStandingsEntry } from '../interfaces/common';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-runsperhit',
  templateUrl: './runsperhit.component.html',
  styleUrls: ['./runsperhit.component.css']
})
export class RunsperhitComponent implements OnInit {
  overallStandings: OverallStandingsRoot;
  materialDataSource: MatTableDataSource<TeamStandingsEntry>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService
    .getSpecificStats('h,r,inn')
    .subscribe((data: OverallStandingsRoot) => {
      this.overallStandings = data;
      this.materialDataSource = new MatTableDataSource(this.overallStandings.overallteamstandings.teamstandingsentry);
      this.materialDataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'rank' : return +item.rank;
          case 'City' : return item.team.City;
          case 'GamesPlayed' : return +item.stats.GamesPlayed['#text'];
          case 'Runs' : return +item.stats.Runs['#text'];
          case 'Hits' : return +item.stats.Hits['#text'];
          case 'RunsPerHit' : return (+item.stats.Runs['#text'] / +item.stats.Hits['#text']);
          case 'HitsPerRun' : return (+item.stats.Hits['#text'] / +item.stats.Runs['#text']);
          default : return item[property];
        }
      };
      this.materialDataSource.sort = this.sort;
    });
  }
}
