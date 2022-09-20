/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import kdaColor from "../../../../../assets/kdaStyle";
import rateColor from "../../../../../assets/rateStyle";
import {
  ChampionType,
  MostInfoType,
  RecentWinRateType,
} from "../../../../../types/mostInfo.types";

const article = css`
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  box-sizing: border-box;
`;
const tabs = css`
  display: flex;
  button {
    position: relative;
    flex: 1;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    &:nth-of-type(1)::after {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      display: inline-block;
      height: 44px;
      width: 1px;
      background-color: #cdd2d2;
    }
  }
`;
const tabBtn = (selected: boolean) => css`
  ${selected === true
    ? `
      background-color: transparent;
      font-weight: bold;
      color: #5e5e5e;
    `
    : `
      background-color: #fff;
      color: #879292;
      border-bottom: 1px solid #cdd2d2;
    `}
`;
const championItem = css`
  display: flex;
  align-items: center;
  padding: 4px 0px;
  border-bottom: 1px solid #cdd2d2;
  box-sizing: border-box;
  &:last-child {
    border-bottom: 0;
  }
  strong {
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #5e5e5e;
  }
  small {
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #879292;
  }
`;
const recentItem = css`
  display: flex;
  align-items: center;
  padding: 4px 0px;
  border-bottom: 1px solid #cdd2d2;
  box-sizing: border-box;
  &:last-child {
    border-bottom: 0;
  }
  strong {
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #5e5e5e;
  }
  small {
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #879292;
  }
`;
const thumbnail = css`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 12px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const nameStyle = css`
  flex: 1;
  text-align: left;
  margin-left: 10px;
`;
const flexStyle = css`
  flex: 1;
  text-align: center;
`;
const chartStyle = css`
  margin-right: 9px;
`
const barStyle = css`
  display: flex;
  width: 123px;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  overflow: hidden;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;  
  letter-spacing: normal;
  color: #fff;

`
const winStyle = (flex: number) => css`
  flex: ${flex};
  background-color: #1f8ecd;
  text-align: left;
  padding-left: 4px;
`
const lossStyle = (flex: number) => css`
  flex: ${flex};
  background-color: #ee5a52;
  text-align: right;
  padding-right: 4px;
`
/*
    전적
*/
function MostInfo({ data }: { data: MostInfoType | undefined }) {
  const [type, setType] = useState<"champion" | "7days">("champion");

  return (
    <article css={article}>
      <div css={tabs}>
        <button
          css={tabBtn(type === "champion")}
          onClick={() => setType("champion")}
        >
          챔피언 승률
        </button>
        <button css={tabBtn(type === "7days")} onClick={() => setType("7days")}>
          7일간 랭크 승률
        </button>
      </div>
      {type === "champion" ? (
        <div>
          <ul>
            {data?.champions.sort((a: ChampionType, b: ChampionType) => {
              return b.games - a.games
            }).map((champion: ChampionType, i: number) => {

              const kda = (
                (champion.kills + champion.assists) /
                champion.deaths
              ).toFixed(2);

              const rate = (
                (champion.wins / (champion.wins + champion.losses)) *
                100
              ).toFixed(0);

              return (
                <li css={championItem} key={`champion_${i}`}>
                  <div css={thumbnail}>
                    <img src={champion.imageUrl} alt="champion" />
                  </div>
                  <div css={nameStyle}>
                    <div>
                      <strong>{champion.name}</strong>
                    </div>
                    <div><small>CS {champion.cs}</small></div>
                  </div>
                  <div css={flexStyle}>
                    <div>
                      <strong css={kdaColor(kda)}>{kda} 평점</strong>
                    </div>
                    <div>
                      <small>{champion.kills}/{champion.deaths}/{champion.assists}</small>
                    </div>
                  </div>
                  <div css={flexStyle}>
                    <div>
                      <strong css={rateColor(rate)}>{rate}%</strong>
                    </div>
                    <div><small>{champion.games}게임</small></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            {data?.recentWinRate.sort((a: RecentWinRateType, b: RecentWinRateType) => {

              const getRate = function (wins: number, losses: number) {
                const rate = (
                  (wins / (wins + losses)) * 100
                ).toFixed(0);
                return rate
              }
              const brate = getRate(b.wins, b.losses);
              const arate = getRate(a.wins, a.losses);

              if (brate < arate) {
                return -1;
              }
              if (arate < brate) {
                return 1;
              }
              return 0;
              
            }).map((item: RecentWinRateType, i: number) => {

              const rate = (
                (item.wins / (item.wins + item.losses)) *
                100
              ).toFixed(0);

              return (
                <li css={recentItem} key={`recent_${i}`}>
                  <div css={thumbnail}>
                    <img src={item.imageUrl} alt="champion" />
                  </div>
                  <div css={nameStyle}>
                    <strong>{item.name}</strong>
                  </div>
                  <div css={flexStyle}>
                    <small css={rateColor(rate)}>{rate}%</small>
                  </div>
                  <div css={chartStyle}>
                    <div css={barStyle}>
                      <div css={winStyle(item.wins)}>
                        {item.wins}승
                      </div>
                      <div css={lossStyle(item.losses)}>
                        {item.losses}패
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </article>
  );
}

export default MostInfo;
