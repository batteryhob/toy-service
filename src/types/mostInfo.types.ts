
export interface RecentWinRateType {
    id: number;
    imageUrl: string;
    key: string;
    losses: number;
    name: string;
    wins:number;
}

export interface ChampionType {
    assists: number;
    cs: number;
    deaths: number;
    games: number;
    id: number;
    imageUrl: string;
    key: string;
    kills: number;
    losses: number;
    name: string;
    rank: number;
    wins: number;
}

export interface MostInfoType {
    champions: Array<ChampionType>;
    recentWinRate: Array<RecentWinRateType>;
}