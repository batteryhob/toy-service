/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MostInfoType } from "../../../../types/mostInfo.types";
import { LeagueType } from "../../../../types/summoner.types";
import MostInfo from "./components/mostInfo";
import RankInfo from "./components/rankInfo";

const aside = css`
  width: 300px;
  margin-right: 10px;
`;

/*
    랭크
*/
function Rank({ leagues, mostInfo }: { leagues: Array<LeagueType> | undefined, mostInfo: MostInfoType | undefined }) {
  return (
    <aside css={aside}>
      {
        leagues?.map((rank: LeagueType, i: number)=>{
          return (
            <RankInfo data={rank} key={`league_${i}`} tierRank={i === 0 ? "솔로 랭크" : "자유 5:5 랭크" }/>
          )
        })
      }
      <MostInfo data={mostInfo} />
    </aside>
  );
}

export default Rank;
