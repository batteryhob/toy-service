/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

import { GameType } from "../../../../../types/match.types";

import apis from "../../../../../apis/client";
import useDate from "../../../../../hooks/useDate";
import useTime from "../../../../../hooks/useTime";
import Item from "./item";
import useKDA from "../../../../../hooks/useKDA";
import kdaColor from "../../../../../assets/kdaStyle";

const gameWrapper = (isWin: boolean) => css`
  margin-bottom: 8px;
  padding: 4px 0px;
  border: 1px solid red;
  box-sizing: border-box;
  ${
    isWin ? 
    `
    border: solid 1px #a1b8cd;
    background-color: #b0ceea;
    `
    :
    `
    border: solid 1px #c0aba8;
    background-color: #d6b5b2;
    `
  }
  font-size: 11px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
const inner = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const date = (isWin: boolean) => css`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    &:nth-of-type(1){
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -13.5px;
        display: inline-block;
        height: 1px;
        width: 27px;
        ${
          isWin ?
          `background-color: #94b9d6 !important;`
          :
          `background-color: #d0a6a5 !important;`
        }
      }
    }
    &:nth-of-type(2){
      margin-top: 8px;
    }
  }
`;
const champ = css`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const champImg = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const champThumbnail = css`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`
const champSkill = css`
  display: flex;
  margin-left: 2px;
  ul {
    margin-left: 4px;
    li {
      margin-bottom: 2px;
      height: 22px;
      border-radius: 2px;
      overflow: hidden;
      img {
        width: 22px;
        height: 22px;
      }
    }
  }
`
const kdaColumn = css`
  width: 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    &:nth-of-type(1){
      font-size: 15px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.58px;
      color: #555e5e;
      span {
        color: #d0021b !important;
      }
    }
    &:nth-of-type(3){
      margin-top: 7px;
    }
  }
`
const levelColumn = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    &:nth-of-type(3){
      color: #d0021b;
    }
  }
`
const itemWrapper = css`  
  margin-left: 30px;
  width: 94px;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 94px;
    gap: 2px;
    li {
      width: 22px;
      height: 22px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
const detailWrapper = css`
  margin-left: 11px;
  margin-right: 14px;
  display: flex;
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 2px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`
const detailTeam = css`
  &:nth-of-type(1) {
    margin-left: 0;
  }
  &:nth-of-type(2) {
    margin-left: 13px;
  }
`
const detailImageWrapper = css`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  overflow: hidden;
  img {
    width: 16px;
    height: 16px;
  }
`
const detailName = css`
  display: block;
  width: 52px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 3px;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.42px;
  color: #555;
`
const winColor = (isWin: boolean) => css`
${
  isWin ?
  `color: #94b9d6 !important;`
  :
  `color: #d0021b !important;`
}
`
const badge = (first: boolean) => css`
  padding: 3px 5px;
  border-radius: 9px;
  border: solid 1px #7f3590;
  background-color: #8c51c5;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.38px;
  color: #fff;
  ${
    first ?
      `
        margin-right: 3px;
        border: solid 1px #7f3590;
        background-color: #8c51c5;
      `
    :
    `
      border: solid 1px #bf3b36;
      background-color: #ec4f48;
    `
  }
`

/*
    전적
*/
function GameItem({ game }: { game: GameType }) {

  const { data: matcheDetail } = useQuery<any | undefined>(
    ["matcheDetail", game.gameId],
    () => {
      return apis.getMatchDetail(game.summonerName, game.gameId);
    }
  );
  const readableDate = useDate(game.createDate);
  const readableTime = useTime(Number(game.gameLength) | 0);

  const kda = useKDA({ kills: game.stats.general.kill, assists: game.stats.general.assist, deaths: game.stats.general.death})

  return (
    <li css={gameWrapper(game.isWin)}>
      <div css={inner}>
        <div css={date(game.isWin)}>
          <div>
            <p>{game.gameType}</p>
            <p>{readableDate}</p>
          </div>
          <div>
            <p><strong css={winColor(game.isWin)}>{game.isWin ? `승리` : `패배`}</strong></p>
            <p>{readableTime}</p>
          </div>
        </div>
        <div css={champ}>
          <div css={champImg}>
            <div css={champThumbnail}>
              <img src={game.champion.imageUrl} alt="" />
            </div>
            <div css={champSkill}>
                <div>
                  <ul>
                    {
                      game.spells.map((e: any, i: number)=>{
                        return (
                          <li key={`spell_${i}`}>
                            <img src={e.imageUrl} alt="spell" />
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div>
                  <ul>
                    {
                      game.peak.map((e: any, i: number)=>{
                        return (
                          <li key={`peak_${i}`}>
                            <img src={e} alt="peak" />
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>             
            </div>
          </div>
        </div>
        <div css={kdaColumn}>
           <p>{game.stats.general.kill} / <span>{game.stats.general.death}</span> / {game.stats.general.assist}</p>
           <p css={kdaColor(kda)}><strong>{game.stats.general.kdaString}</strong> 평점</p>
           <p>
             {
               game.stats.general.largestMultiKillString !== "" && <span css={badge(true)}>{game.stats.general.largestMultiKillString}</span>
             }
             {
               game.stats.general.opScoreBadge !== "" && <span css={badge(false)}>{game.stats.general.opScoreBadge}</span>
             }             
            </p>
        </div>
        <div css={levelColumn}>
          <p>레벨 {game.champion.level}</p>
          <p>{game.stats.general.cs} ({game.stats.general.csPerMin}) CS</p>
          <p>킬관여 {game.stats.general.contributionForKillRate}</p>
        </div>
        <div css={itemWrapper}>
          <ul>
            {
              game.items.map((item: any, i: number)=>{
                return (
                  <Item imageUrl={item.imageUrl} key={`item_${i}`} />
                )
              })
            }
          </ul>
        </div>
        <div css={detailWrapper}>
          {
            matcheDetail?.teams.map((detail: any, i: number)=>{
              return (
                <div css={detailTeam} key={`detail_${i}`}>
                  <ul>
                    {
                      detail.players.map((player: any, i: number)=>{
                        return (
                          <li key={`player_${i}`}>
                            <div css={detailImageWrapper}>
                              <img src={player.champion.imageUrl} alt="champion" />
                            </div>
                            <div css={detailName}>
                              {player.summonerName}                           
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    </li>
  );
}

export default GameItem;

