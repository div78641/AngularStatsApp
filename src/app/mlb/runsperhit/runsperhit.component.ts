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
    .getSpecificStats('h,r,inn', 'stats.r.d')
    .subscribe((data: OverallStandingsRoot) => {
      this.overallStandings = data;
      this.materialDataSource = new MatTableDataSource(this.overallStandings.overallteamstandings.teamstandingsentry);
      this.materialDataSource.sort = this.sort;
    });
  }
}
