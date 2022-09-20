/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

import { GameType } from "../../../../../types/match.types";

import apis from "../../../../../apis/client";

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
const date = css`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;  
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
`
const levelColumn = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  return (
    <li css={gameWrapper(game.isWin)}>
      <div css={inner}>
        <div css={date}>
          <div>
            <p>{game.gameType}</p>
            <p>{game.createDate}</p>
          </div>
          <div>
            <p><strong>{game.isWin ? `승리` : `패배`}</strong></p>
            <p>{game.gameLength}</p>
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
           <p>{game.stats.general.kill}/{game.stats.general.death}/{game.stats.general.assist}</p>
           <p><strong>{game.stats.general.kdaString}</strong> 평점</p>
           <p><span>{game.stats.general.largestMultiKillString}</span><span>{game.stats.general.opScoreBadge}</span></p>
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
                  <li key={`item_${i}`}>
                    <img src={item.imageUrl} alt="아이템" />
                  </li>
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

