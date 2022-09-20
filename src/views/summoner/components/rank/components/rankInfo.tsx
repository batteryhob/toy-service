/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import rateColor from "../../../../../assets/rateStyle";
import { LeagueType } from "../../../../../types/summoner.types";
import { addComma } from "../../../../../utils/text";

const article = (unRanked: boolean) => css`
  display: flex;
  flex-direction: row;
  ${unRanked === true ?
    `padding: 9px 8px;`:
    `
    padding: 16px 28px;
    align-items: center;    
    `
  }  
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  box-sizing: border-box;
  background-color: #f2f2f2;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const rankImage = css`
  width: 104px;
  height: 104px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const rankDesc = css`
  margin-left: 8px;
  p {
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
`
const rankName = css`
  margin-top: 6px;
  font-size: 11px;
  color: #879292;
`;
const total = css`
  margin-top: 4px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #353a3a;
`
const rankTier = css`
  margin-top: 4px;
  font-size: 15px;
  font-weight: bold !important;
  color: #1f8ecd;
`;
const rankLp = css`
  margin-top: 6px;
  font-size: 12px;
  color: #879292;
`;
const rankRate = css`
  margin-top: 3px;
  font-size: 12px;
  color: #879292;
`;

const unrankImage = css`
  width: 64px;
  height: 64px;
  img {
    width: 100%;
    height: 100%;
  }
`
const unrankDesc = css`
  margin-left: 28px;
`;
const unrankName = css`
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #879292;
`;
const unranked = css`
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #879292;
`
/*
    전적
*/
function RankInfo({ data, tierRank }: { data: LeagueType, tierRank: string }) {

  const rate = ((data.wins / (data.wins + data.losses)) * 100).toFixed(0);

  return (
    <article css={article(data.hasResults)}>
      {
        data.hasResults ? 
        <>
          <div css={rankImage}>
            <img src={data.tierRank.imageUrl} alt={data.tierRank.tier} />
          </div>
          <div css={rankDesc}>
            <p css={rankName}>{tierRank}</p>
            <p css={total}><strong>총 {addComma(data.wins + data.losses)}게임</strong></p>
            <p css={rankTier}>{data.tierRank.tier}</p>
            <p css={rankLp}>
              <strong>{data.tierRank.lp}LP</strong> / {data.wins}승 {data.losses}패
            </p>
            <p css={css`${rankRate} ${rateColor(rate)}` }>승률 {rate}%</p>
          </div>
        </>
        :
        <>
          <div css={unrankImage}>
            <img src="/imgs/unranked.png" alt="unranked" />
          </div>
          <div css={unrankDesc}>
            <p css={unrankName}>{tierRank}</p>
            <p css={unranked}><strong>Unranked</strong></p>
          </div>
        </>
      }
    </article>
  );
}

export default RankInfo;
