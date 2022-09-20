/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Tooltip from "./itemTooltip";

const li = css`
    position: relative;
`

/*
    아이템
*/
function Item({ imageUrl }: { imageUrl: string }) {
    const [hover, setHover] = useState<boolean>(false);
    function handleMouseOver() {
        setHover(true);
    }
    function Blur() {
        setHover(false);
    }
    return (
        <li css={li} onMouseOver={handleMouseOver} onMouseLeave={Blur} >
            <img src={imageUrl} alt="아이템" />
            {
                hover && <Tooltip imageUrl={imageUrl} />
            }
        </li>
    );
}

export default Item;
