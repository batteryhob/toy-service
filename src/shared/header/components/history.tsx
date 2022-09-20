/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAppSelector } from "../../../app/hooks";
import { getHistoryState } from "../../../feature/history.reducer";

const historyWrapper = css`
    position: absolute;
    width: 100%;
    top: 36px;
    left: 0px;    
    ul {
        padding: 12px 0px;
        border-radius: 2px;
        background-color: #fff;
        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px 14px;
            button {
                cursor: pointer;
                border: none;
                line-height: 32px;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
                color: #727272;
            }
        }
    }
`;

/*
    최근 검색 기록
*/
function History() {
    const { datas: historys } = useAppSelector(getHistoryState);
    return (
        <div css={historyWrapper}>
            <ul>
                {
                    historys.map((history: string, i: number) => {
                        return (
                            <li key={`history_${i}`}>
                                <button>{history}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default History;