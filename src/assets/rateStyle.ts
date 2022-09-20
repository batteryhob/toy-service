/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const color = '#c6443e';

const rateColor = (rate: string) => css`
    ${
        ((Number(rate) | 0) >= 60) && `color: ${color} !important;`
    }
`;

export default rateColor