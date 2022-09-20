
/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "../../shared/header";
import Id from "./components/id";
import Match from "./components/match";
import Rank from "./components/rank";
import Wrapper from "../../shared/wrapper";

import { css } from "@emotion/react";

import apis from "../../apis/client";

import { SummonerType } from "../../types/summoner.types";
import { MatchType } from "../../types/match.types";
import { MostInfoType } from "../../types/mostInfo.types";

const matchWrapper = css`
  display: flex;
  margin-top: 10px;
`;

/*
    전적 뷰
*/
function Summoner() {
  const { summonerName } = useParams<string>();

  const { data: summoner } = useQuery<SummonerType | undefined>(
    ["summoner", summonerName],
    () => {
      if(summonerName)
        return apis.getSummoner(summonerName);
    }
  );

  const { data: matches } = useQuery<MatchType | undefined>(
    ["matches", summonerName],
    () => {
      if(summonerName)
        return apis.getMatches(summonerName);
    }
  );

  const { data: mostInfo } = useQuery<MostInfoType | undefined>(
    ["mostInfo", summonerName],
    () => {
      if(summonerName)
        return apis.getMostInfo(summonerName);
    }
  );

  return (
    <>
      <Header />
      <main>       
        <Id data={summoner?.summoner}/>
        <Wrapper>
          <section css={matchWrapper}>
            <Rank leagues={summoner?.summoner.leagues} mostInfo={mostInfo} />
            <Match data={matches} />
          </section>
        </Wrapper>
      </main>
    </>
  );
}

export default Summoner;
