import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { TeamGameLogRoot } from '../interfaces/team.game.log';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gamelog',
  templateUrl: './gamelog.component.html',
  styleUrls: ['./gamelog.component.css']
})
export class GamelogComponent implements OnInit {
  gameLog: TeamGameLogRoot;
  isLoadingResults = true;
  faSync = faSync;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService
    .getGameLogByTeam('bal')
    .subscribe((data: TeamGameLogRoot) => {
      this.gameLog = data;
      this.isLoadingResults = false;
    });
  }

}
