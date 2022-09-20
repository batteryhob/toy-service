/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import { MatchType } from "../../../../types/match.types";
import GameList from "./components/gameList";
import Summary from "./components/summary";

const section = css`
  flex: 1;
`;
const tabs = css`
  height: 36px;
  padding-left: 16px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  box-sizing: border-box;
  ul {
    display: flex;
    flex-direction: row;
    li {
      margin-right: 24px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;

const tab = (selected: boolean) => css`
  height: 100%;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  ${selected &&
  `
    height: 35px;
    color: #1f8ecd;
    border-bottom: 2px solid #1f8ecd;
  `}
`;

/*
    전적
*/
function Match({ data }: { data: MatchType | undefined }) {
  const [matchType, setMatchType] = useState<"total" | "solo" | "free">(
    "total"
  );

  return (
    <section css={section}>
      <div css={tabs}>
        <ul>
          <li>
            <button css={tab(matchType === 'total')} onClick={() => setMatchType("total")}>전체</button>
          </li>
          <li>
            <button css={tab(matchType === 'solo')} onClick={() => setMatchType("solo")}>솔로랭크</button>
          </li>
          <li>
            <button css={tab(matchType === 'free')} onClick={() => setMatchType("free")}>자유랭크</button>
          </li>
        </ul>
      </div>
      <Summary
        champions={data?.champions}
        positions={data?.positions}
        summary={data?.summary}
      />
      <GameList games={data?.games} />
    </section>
  );
}

export default Match;
