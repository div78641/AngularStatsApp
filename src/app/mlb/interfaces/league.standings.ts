import { TeamStandingsEntry } from './common';

export interface LeagueStandingsRoot {
    conferenceteamstandings: ConferenceTeamStandings;
}

export interface ConferenceTeamStandings {
    lastUpdatedOn: Date;
    conference: Array<Conference>;
}

export interface Conference {
    '@name': string;
    teamentry: TeamStandingsEntry;
}
