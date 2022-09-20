/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PositionType } from "../../../../../types/match.types";

const positionWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const thumbnail = css`
  margin-right: 8px;
  width: 28px;
  height: 28px;
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

/*
    전적
*/
function SummaryPosition({ position }: { position: PositionType }) {

  const rate = (
    (position.wins / (position.wins + position.losses)) *
    100
  ).toFixed(0);

  return (
    <li>
      <div css={positionWrapper}>
        <div css={thumbnail}>
          {
            (position.position === 'ADC' || position.position === 'TOP') && <img src="/imgs/icon-adc.svg" alt={position.positionName} />
          }
          {
            position.position === 'MID' && <img src="/imgs/icon-mid.svg" alt={position.positionName} />
          }
          {
            position.position === 'JNG' && <img src="/imgs/icon-jng.svg" alt={position.positionName} />
          }
          {
            position.position === 'SUP' && <img src="/imgs/icon-sup.svg" alt={position.positionName} />
          }
        </div>
        <div css={description}>
          <div css={name}>
            {
              position.position === 'TOP' && `탑`
            }
            {
              position.position === 'MID' && `미드`
            }
            {
              position.position === 'ADC' && `바텀`
            }
                        {
              position.position === 'JNG' && `정글`
            }
                        {
              position.position === 'SUP' && `서폿`
            }
          </div>
          <div css={summary}>
            <span>승률 <strong>{rate}</strong>%</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SummaryPosition;
