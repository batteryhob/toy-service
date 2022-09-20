/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import kdaColor from "../../../../../assets/kdaStyle";
import rateColor from "../../../../../assets/rateStyle";
import useKDA from "../../../../../hooks/useKDA";
import { ChampionType } from "../../../../../types/match.types";

const championWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const thumbnail = css`
  margin-right: 8px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const description = css``;
const name = css`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
`;
const summary = css`
  margin-top: 3px;
  font-size: 11px;
  color: #555;
`;
const winRateStyle = css`
  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 11px;
    margin-left: 6px;
    margin-right: 6px;
    background-color: #cdd2d2;
  }
`

/*
    전적
*/
function SummaryChamp({ champion }: { champion: ChampionType }) {

  const kda = useKDA({ kills: champion.kills, assists: champion.assists, deaths: champion.deaths})

  const rate = (
    (champion.wins / (champion.wins + champion.losses)) *
    100
  ).toFixed(0);

  return (
    <li>
      <div css={championWrapper}>
        <div css={thumbnail}>
          <img src={champion.imageUrl} alt={champion.name} />
        </div>
        <div css={description}>
          <div css={name}>{champion.name}</div>
          <div css={summary}>            
            <span css={rateColor(rate)}><strong>{rate}</strong>%</span>
            <span css={winRateStyle}> ({champion.wins}승 {champion.losses}패)</span>
            <span css={kdaColor(kda)}><strong>{kda} 평점</strong></span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SummaryChamp;
