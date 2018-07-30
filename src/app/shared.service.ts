import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { OverallStandingsRoot } from './mlb/interfaces/overall.standings';
import { LeagueStandingsRoot } from './mlb/interfaces/league.standings';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic OGIxOTI3MjQtMGI4YS00Y2NkLWIzMzItN2I2NWNhOkd1bWJ5MDE1IQ=='
  })
};

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  mlbOverallStandingsUrl = 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/overall_team_standings.json';
  mlbLeagueStandingsUrl = 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/conference_team_standings.json';
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SharedService');
  }

  getOverallStandings() {
    return this.http.get<OverallStandingsRoot>(this.mlbOverallStandingsUrl, httpOptions)
    .pipe(
      catchError(this.handleError('getOverallStandings', []))
    );
  }
  getLeagueStandings() {
    return this.http.get<LeagueStandingsRoot>(this.mlbLeagueStandingsUrl, httpOptions)
    .pipe(
      catchError(this.handleError('getLeagueStandings', []))
    );
  }
  getSpecificStats(statList: string, sortBy: string) {
    const statUrl = `${this.mlbOverallStandingsUrl}?teamstats=${statList}&sort=${sortBy}`;
    return this.http.get<OverallStandingsRoot>(statUrl, httpOptions)
    .pipe(
      catchError(this.handleError('getSpecificStats', []))
    );
  }
}
