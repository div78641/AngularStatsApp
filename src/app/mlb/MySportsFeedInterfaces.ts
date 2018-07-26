export interface MySportsFeedsMlbOverallStandingsResponse {
    overallteamstandings: OverallTeamStandings;
}
export interface OverallTeamStandings {
    lastUpdatedOn: Date;
    teamstandingsentry: Array<TeamStandingsEntry>;
}

export interface TeamStandingsEntry {
    team: Team;
    rank: string;
    stats: Stats;
}

export interface Team {
    ID: string;
    City: string;
    Name: string;
    Abbreviation: string;
}

export interface Stats {
    GamesPlayed?: StatsObject;
    AtBats?: StatsObject;
    Runs?: StatsObject;
    Hits?: StatsObject;
    SecondBaseHits?: StatsObject;
    ThirdBaseHits?: StatsObject;
    Homeruns?: StatsObject;
    EarnedRuns?: StatsObject;
    UnearnedRuns?: StatsObject;
    RunsBattedIn?: StatsObject;
    BatterWalks?: StatsObject;
    BatterSwings?: StatsObject;
    BatterStrikes?: StatsObject;
    BatterStrikesFoul?: StatsObject;
    BatterStrikesMiss?: StatsObject;
    BatterStrikesLooking?: StatsObject;
    BatterTagOuts?: StatsObject;
    BatterForceOuts?: StatsObject;
    BatterPutOuts?: StatsObject;
    BatterGroundBalls?: StatsObject;
    BatterFlyBalls?: StatsObject;
    BatterLineDrives?: StatsObject;
    Batter2SeamFastballs?: StatsObject;
    Batter4SeamFastballs?: StatsObject;
    BatterCurveballs?: StatsObject;
    BatterChangeups?: StatsObject;
    BatterCutters?: StatsObject;
    BatterSliders?: StatsObject;
    BatterSinkers?: StatsObject;
    BatterSplitters?: StatsObject;
    BatterStrikeouts?: StatsObject;
    StolenBases?: StatsObject;
    CaughtBaseSteals?: StatsObject;
    BatterStolenBasePct?: StatsObject;
    BattingAvg?: StatsObject;
    BatterOnBasePct?: StatsObject;
    BatterSluggingPct?: StatsObject;
    BatterOnBasePlusSluggingPct?: StatsObject;
    BatterIntentionalWalks?: StatsObject;
    HitByPitch?: StatsObject;
    BatterSacrificeBunts?: StatsObject;
    BatterSacrificeFlies?: StatsObject;
    TotalBases?: StatsObject;
    ExtraBaseHits?: StatsObject;
    BatterDoublePlays?: StatsObject;
    BatterTriplePlays?: StatsObject;
    BatterGroundOuts?: StatsObject;
    BatterFlyOuts?: StatsObject;
    BatterGroundOutToFlyOutRatio?: StatsObject;
    PitchesFaced?: StatsObject;
    PlateAppearances?: StatsObject;
    LeftOnBase?: StatsObject;
    OpponentsLeftOnBase?: StatsObject;
    OpponentAtBats?: StatsObject;
    SecondBaseHitsAllowed?: StatsObject;
    ThirdBaseHitsAllowed?: StatsObject;
    PitcherSwings?: StatsObject;
    PitcherStrikes?: StatsObject;
    PitcherStrikesFoul?: StatsObject;
    PitcherStrikesMiss?: StatsObject;
    PitherStrikesLooking?: StatsObject;
    PitcherGroundBalls?: StatsObject;
    PitcherFlyBalls?: StatsObject;
    PitcherLineDrives?: StatsObject;
    Pitcher2SeamFastballs?: StatsObject;
    Pitcher4SeamFastballs?: StatsObject;
    PitcherCurveballs?: StatsObject;
    PitcherChangeups?: StatsObject;
    PitcherCutters?: StatsObject;
    PitcherSliders?: StatsObject;
    PitcherSinkers?: StatsObject;
    PitcherSplitters?: StatsObject;
    PitcherSacrificeBunts?: StatsObject;
    PitcherSacrificeFlies?: StatsObject;
    EarnedRunAvg?: StatsObject;
    InningsPitched?: StatsObject;
    HitsAllowed?: StatsObject;
    RunsAllowed?: StatsObject;
    EarnedRunsAllowed?: StatsObject;
    HomerunsAllowed?: StatsObject;
    PitcherWalks?: StatsObject;
    PitcherStrikeouts?: StatsObject;
    PitchingAvg?: StatsObject;
    WalksAndHitsPerInningPitched?: StatsObject;
    Shutouts?: StatsObject;
    BattersHit?: StatsObject;
    PitcherIntentionalWalks?: StatsObject;
    PitcherGroundOuts?: StatsObject;
    PitcherFlyOuts?: StatsObject;
    PitcherWildPitches?: StatsObject;
    Balks?: StatsObject;
    PitcherStolenBasesAllowed?: StatsObject;
    PitcherCaughtStealing?: StatsObject;
    PickoffAttempts?: StatsObject;
    Pickoffs?: StatsObject;
    TotalBattersFaced?: StatsObject;
    PitchesThrown?: StatsObject;
    PitcherGroundOutToFlyOutRatio?: StatsObject;
    PitcherOnBasePct?: StatsObject;
    PitcherSluggingPct?: StatsObject;
    PitcherOnBasePlusSluggingPct?: StatsObject;
    StrikeoutsPer9Innings?: StatsObject;
    WalksAllowedPer9Innings?: StatsObject;
    HitsAllowedPer9Innings?: StatsObject;
    StrikeoutsToWalksRatio?: StatsObject;
    PitchesPerInning?: StatsObject;
    InningsPlayed?: StatsObject;
    TotalChances?: StatsObject;
    FielderTagOuts?: StatsObject;
    FielderForceOuts?: StatsObject;
    FielderPutOuts?: StatsObject;
    Assists?: StatsObject;
    Errors?: StatsObject;
    FielderDoublePlays?: StatsObject;
    FielderTriplePlays?: StatsObject;
    FielderStolenBasesAllowed?: StatsObject;
    FielderCaughtStealing?: StatsObject;
    FielderStolenBasePct?: StatsObject;
    PassedBalls?: StatsObject;
    FielderWildPitches?: StatsObject;
    FieldingPct?: StatsObject;
    DefenceEfficiencyRatio?: StatsObject;
    OutsFaced?: StatsObject;
    Wins?: StatsObject;
    Losses?: StatsObject;
    WinPct?: StatsObject;
    GamesBack?: StatsObject;
    RunsFor?: StatsObject;
    RunsAgainst?: StatsObject;
    RunDifferential?: StatsObject;
}

export interface StatsObject {
    '@category'?: string;
    '@abbreviation': string;
    '#text': string;
}
