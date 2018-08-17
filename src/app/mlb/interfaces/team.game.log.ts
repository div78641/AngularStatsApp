import { GameLog } from './common';

export interface TeamGameLogRoot {
    teamgamelogs: TeamGameLogs;
}

export interface TeamGameLogs {
    lastUpdatedOn: Date;
    gamelogs: Array<GameLog>;
}
