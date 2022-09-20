/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapper = css`
    max-width: 1000px;
    height: 100%;
    margin: auto;
`;

/*
    콘텐츠 랩퍼
*/
function Wrapper({ children }: { children?: JSX.Element }) {
    return (
      <div css={wrapper}>
        {children}
      </div>
    );
  }
  
  export default Wrapper;
  