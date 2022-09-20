/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useItemDescription from "../../../../../hooks/useItemDescription";

const tooltip = css`
    position: absolute;
    bottom: 39px;
    margin-left: -150px;
    padding: 10px;
    width: 300px;
    overflow:hiddlen; 
    word-break:break-all;
    background-color: #222727;
    color: #fff;
    &::after {
        content: '';
        position: absolute;
        border-top: 9px solid  #222727;
        border-right: 9px solid transparent;
        border-left: 9px solid transparent;
        bottom: -9px;
        left: 152.5px;
    }
`;

/*
    툴팁
*/
function Tooltip({ imageUrl }: { imageUrl: string }) {

 const desc = useItemDescription(imageUrl);

  return (
      <div css={tooltip}>
          <div>
            <p>{ desc.name }</p>
            <div dangerouslySetInnerHTML={{ __html: desc.description }}></div>
          </div>       
      </div>
  );
}

export default Tooltip;
