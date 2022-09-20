/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  ChampionType,
  PositionType,
  SummaryType,
} from "../../../../../types/match.types";
import CircleChart from "./circleChart";
import SummaryChamp from "./summaryChamp";
import SummaryPosition from "./summaryPosition";


const article = css`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #cdd2d2;
  box-sizing: border-box;
`
const contents = css`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  > div {
    border-right: solid 1px #cdd2d2;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
`;
const chartWrapper = css`
  flex: 1;
`;
const chartTitle = css`
  padding-top: 16px;
  padding-left: 33px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #666;
`
const chartContent = css`
  display: flex;
  align-items: center;
  padding-bottom: 23px;
  padding-left: 24px;
`
const chart = css`
  margin-top: 14px;
  width: 90px;
  height: 90px;
`
const desc = css`
  position: relative;
  width: 162px;
`
const rateStyle = css`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
`
const kdaStyle = css`
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;
`

const championWrapper = css`
  width: 228px;
  ul{
    padding: 16px;
    li {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;
const positionWrapper = css`
  flex: 1;
  padding: 16px;
  p {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #666;
  }
  ul{
    li {
      margin-top: 20px;
    }
  }
`;

/*
    전적
*/
function Summary({
  champions,
  positions,
  summary,
}: {
  champions: Array<ChampionType> | undefined;
  positions: Array<PositionType> | undefined;
  summary: SummaryType | undefined;
}) {


  const wins = summary ? summary.wins : 0;
  const losses = summary ? summary.losses : 0;
  const games = wins + losses;

  const rate = ((wins / games) * 100).toFixed(0);
  
  const kills = summary ? summary.kills : 0;
  const deaths = summary ? summary.deaths : 0;
  const assists = summary ? summary.assists : 0;
  const kda = ((kills + assists) / deaths).toFixed(2);


  return (
    <article css={article}>
      <div css={contents}>
        <div css={chartWrapper}>
          <div css={chartTitle}>
            {games}전 {wins}승 {losses}패
          </div>
          <div css={chartContent}>
            <div css={chart}>
              <CircleChart rate={Number(rate) | 0}/>
            </div>
            <div css={desc}>
              <p css={kdaStyle}>{summary?.kills} / {summary?.deaths} / {summary?.assists}</p>
              <p css={rateStyle}>{kda}:1 ({rate}%)</p>
            </div>
          </div>
        </div>
        <div css={championWrapper}>
          <ul>
            {champions?.map((champion: ChampionType, i: number) => {
              if(i < 3)
                return <SummaryChamp champion={champion} key={champion.id} />;
              else
                return <></>;
            })}
          </ul>
        </div>
        <div css={positionWrapper}>
          <p>선호 포지션 (랭크)</p>
          <ul>
            {positions?.map((position: PositionType, i: number) => {
              if(i < 2)
                return <SummaryPosition position={position} key={`position_${i}`}/>;
              else
                return <></>;

            })}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Summary;
