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
function GameList({ games }: { games: Array<GameType> | undefined }) {
  return (
    <article css={article}>
      <ul>
        {games?.map((game: GameType) => {
          return <GameItem game={game} key={game.gameId} />;
        })}
      </ul>
    </article>
  );
}

export default GameList;
