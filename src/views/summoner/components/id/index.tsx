/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Wrapper from "../../../../shared/wrapper";

import { PreviousTierType, Summoner } from "../../../../types/summoner.types";
import { addComma } from "../../../../utils/text";

const section = css`
  border-bottom: 1px solid #d8d8d8;
`;
const idInner = css`
  padding: 15px 0px 14px 24px;
`;
const previousTiers = css`
  ul {
    display: flex;
    gap: 7px;
    margin-bottom: 6px;
    li {
      padding: 4px 5px 3px;
      border-radius: 2px;
      border: solid 1px #d0d3d4;
      box-sizing: border-box;
      background-color: #e0e3e3;
      font-size: 11px;
      line-height: 11px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.42px;
      color: #657070;
      strong {
        margin-right: 3px;
      }
    }
  }
`;
const idDescription = css`
  display: flex;
`;
const profile = css`
  position: relative;
  width: 120px;
  height: 120px;
`;
const levelBox = css`
  position: absolute;
  left: calc(60px - 22px);
  bottom: -2px;
  width: 44px;
  height: 24px;
  line-height: 24px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    to bottom,
    #f6e08f,
    var(--dull-orange) 99%
  );
  border-image-slice: 1;
  box-sizing: border-box;
  background-color: #2c3548;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #eabd56;
  z-index: 2;
`;
const profileImage = css`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
`;
const profileBorder = css`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const description = css`
  flex: 1;
  padding-left: 17px;
  h1 {
    margin-top: 11px;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.77px;
    color: #242929;
  }
  h2 {
    margin-top: 4px;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.42px;
    color: #657070;
  }
`;

/*
    서브헤더(아이디)
*/
function Id({ data }: { data: Summoner | undefined }) {
  return (
    <section css={section}>
      <Wrapper>
        <div css={idInner}>
          <div css={previousTiers}>
            <ul>
              {data?.previousTiers.map((tier: PreviousTierType, i: number) => {
                return (
                  <li key={`prevtier_${i}`}>
                    <strong>S{tier.season}</strong>
                    <span>{tier.tier}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div css={idDescription}>
            <div css={profile}>
              <img
                css={profileImage}
                src={data?.profileImageUrl}
                alt="profileImageUrl"
              />
              <img
                css={profileBorder}
                src={data?.profileBorderImageUrl}
                alt="profileBorderImageUrl"
              />
              <div css={levelBox}>{data?.level}</div>
            </div>
            <div css={description}>
              <h1>{data?.name}</h1>
              <h2>
                레더 랭킹
                <strong> {addComma(Number(data?.ladderRank.rank) | 0)}</strong>
                위 (상위 {data?.ladderRank.rankPercentOfTop}%)
              </h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Id;
