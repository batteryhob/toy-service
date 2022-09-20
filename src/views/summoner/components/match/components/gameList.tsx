/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GameType } from "../../../../../types/match.types";
import GameItem from "./gameItem";

const article = css`
  margin-top: 16px;
`;

/*
    전적
*/
function GameList({ games, matchType }: { games: Array<GameType> | undefined, matchType : "total" | "solo" | "free" }) {
  return (
    <article css={article}>
      <ul>
        {games?.filter((game: GameType)=>{
          if(matchType === "solo")
            return game.gameType === "솔랭";
          if(matchType === "free")
            return game.gameType === "자유 5:5 랭크";
          return game;
        }).map((game: GameType) => {
          return <GameItem game={game} key={game.gameId} />;
        })}
      </ul>
    </article>
  );
}

export default GameList;
