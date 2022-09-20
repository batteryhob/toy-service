export interface LadderRankType {
    rank: number;
    rankPercentOfTop: number;
}

export interface LeagueType {
    hasResults: boolean;
    losses: number;
    tierRank: {
        division: string;
        imageUrl: string;
        lp: number;
        name: string;
        shortString: string;
        string: string;
        tier: string;
        tierDivision: string;
        tierRankPoint: number;
    };
    wins: number;
}

export interface PreviousTierType {
    division: string;
    imageUrl: string;
    lp: number;
    name: string;
    season: number;
    shortString: string;
    string: string;
    tier: string;
    tierDivision: string;
    tierRankPoint: number
}

export interface Summoner {
    ladderRank: LadderRankType;
    leagues: Array<LeagueType>;
    level: number;
    name: string;
    previousTiers: Array<PreviousTierType>;
    profileBackgroundImageUrl: string;
    profileBorderImageUrl: string
    profileImageUrl: string;
}

export interface SummonerType {
    summoner: Summoner;
}