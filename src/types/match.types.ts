export interface GameStatType {
  general: {
    assist: number;
    contributionForKillRate: string;
    cs: number;
    csPerMin: number;
    death: number;
    goldEarned: number;
    kdaString: string;
    kill: number;
    largestMultiKillString: string;
    opScoreBadge: string;
    totalDamageDealtToChampions: number;
  };
  ward: {
    sightWardsBought: number;
    visionWardsBought: number;
  };
}

export interface GameType {
  champion: {
    imageUrl: string;
    level: number;
  };
  createDate: number;
  gameId: string;
  gameLength: string;
  gameType: string;
  isWin: boolean;
  items: Array<any>;
  mapInfo: any;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: Array<any>;
  stats: GameStatType;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

export interface ChampionType {
  assists: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  wins: number;
}

export interface PositionType {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

export interface SummaryType {
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
  assists: number;
}

export interface MatchType {
  champions: Array<ChampionType>;
  games: Array<GameType>;
  positions: Array<PositionType>;
  summary: SummaryType;
}
