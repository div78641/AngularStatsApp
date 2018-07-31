import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OverallStandingsRoot } from '../interfaces/overall.standings';
import { SortableColumnComponent } from '../../ui/sortable-column/sortable-column.component';

@Component({
  selector: 'app-runsperhit',
  templateUrl: './runsperhit.component.html',
  styleUrls: ['./runsperhit.component.css']
})
export class RunsperhitComponent implements OnInit {
  overallStandings: OverallStandingsRoot;
  sortableColumn: SortableColumnComponent;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService
    .getSpecificStats('h,r,inn', 'stats.r.d')
    .subscribe((data: OverallStandingsRoot) => {
      this.overallStandings = data;
    });
  }
}
