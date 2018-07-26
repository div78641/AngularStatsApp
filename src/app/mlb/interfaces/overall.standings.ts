import { TeamStandingsEntry } from './common';

export interface OverallStandingsRoot {
    overallteamstandings: OverallTeamStandings;
}

export interface OverallTeamStandings {
    lastUpdatedOn: Date;
    teamstandingsentry: Array<TeamStandingsEntry>;
}
