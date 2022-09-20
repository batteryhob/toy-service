/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const pie = (rate: number) => css`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  place-content: center;
  &:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: conic-gradient(
      #ee5a52 calc(100% - ${rate}%),
      #1f8ecd calc(100% - ${rate}%)
    );
  }
`;
const inner = css`
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #ededed;
  z-index: 1;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #555;
  text-align: center;
  line-height: 64px;
`;
function CircleChart({ rate }: { rate: number }) {
  return (
    <div css={pie(rate)}>
      <div css={inner}>
        <strong>{rate}</strong>%
      </div>
    </div>
  );
}

export default CircleChart;
