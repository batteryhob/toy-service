
/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { ItemType } from "../../types/item.types";

import { insert as insertItemInfo } from "../../feature/itemInfo.reducer";
import { insert as insertHistory } from "../../feature/history.reducer";

const matchWrapper = css`
  display: flex;
  margin-top: 10px;
  margin-bottom: 100px;
`;

/*
    전적 뷰
*/
function Summoner() {
  const dispatch = useDispatch();
  const { summonerName } = useParams<string>();

  const { data: summoner, isLoading: isSummonerLoading } = useQuery<SummonerType | undefined>(
    ["summoner", summonerName],
    () => {
      if (summonerName)
        return apis.getSummoner(summonerName);
    },
    {
      enabled: !!summonerName,
      refetchOnWindowFocus: false,
      staleTime: 36000
    }
  );

  const { data: matches, isLoading: isMatchLoading } = useQuery<MatchType | undefined>(
    ["matches", summonerName],
    () => {
      if (summonerName)
        return apis.getMatches(summonerName);
    },
    {
      enabled: !!summonerName,
      refetchOnWindowFocus: false,
      staleTime: 36000
    }
  );

  const { data: mostInfo, isLoading: isInfoLoading } = useQuery<MostInfoType | undefined>(
    ["mostInfo", summonerName],
    () => {
      if (summonerName)
        return apis.getMostInfo(summonerName);
    },
    {
      enabled: !!summonerName,
      refetchOnWindowFocus: false,
      staleTime: 36000
    }
  );

  const { data: itemInfo } = useQuery<ItemType | undefined>(
    ["itemInfo"],
    () => {
      return apis.getItemInfo();
    },
    {
      enabled: !!summonerName,
      refetchOnWindowFocus: false,
      staleTime: 36000
    }
  );

  useEffect(() => {
    if (summoner) {
      dispatch(insertHistory(summoner.summoner.name));
    }
  }, [summoner, dispatch]);

  useEffect(() => {
    if (itemInfo) {
      dispatch(insertItemInfo(itemInfo.data));
    }
  }, [itemInfo, dispatch]);

  return (
    <>
      <Header />
      <main>
        {
          !isSummonerLoading && <Id data={summoner?.summoner} />
        }
        <Wrapper>
          <section css={matchWrapper}>
            {
              (!isSummonerLoading && !isInfoLoading) && <Rank leagues={summoner?.summoner.leagues} mostInfo={mostInfo} />
            }
            {
              (!isSummonerLoading && !isInfoLoading && !isMatchLoading) && <Match data={matches} />
            }
          </section>
        </Wrapper>
      </main>
    </>
  );
}

export default Summoner;
