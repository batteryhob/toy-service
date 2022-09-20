/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const three = '#2daf7f';
const four = '#1f8ecd';
const five = '#e19205';

const kdaColor = (kda: string) => css`
    ${
        (Number(kda) | 0) >= 3 && `color: ${three} !important;`
    }
    ${
        (Number(kda) | 0) >= 4 && `color: ${four} !important;`
    }
    ${
        (Number(kda) | 0) >= 5 && `color: ${five} !important;`
    }
`;

export default kdaColor