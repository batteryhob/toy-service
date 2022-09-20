/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Wrapper from "../wrapper";

const headerInner = css`
  position: relative;
  height: 100%;
  width: 100%;
`;

const inputWrapper = css`
  position: absolute;
  right: 0;
  bottom: 12px;
  display: flex;
  align-items: center;
  width: 260px;
  height: 32px;
  padding: 0px 14px;
  border-radius: 2px;
  background-color: #fff;
  > div {
    display: flex;
    height: 14px;
    width: 100%;
    input[type="text"] {
      padding: 0;
      width: 100%;
      height: 100%;
      line-height: 14px;
      border: none;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: #727272;
    }
    button {
      font-size: 14px;
      img {
        height: 13px;
        filter: invert(68%) sepia(79%) saturate(4580%) hue-rotate(177deg)
          brightness(99%) contrast(96%);
      }
    }
  }
`;

/*
    전적 뷰
*/
function Header() {
  const navigate = useNavigate();

  const [ inputValue, setInputValue ] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }
  function handleClick() {
    navigate(`/summoner/${inputValue}`);
  }

  return (
    <header>
      <Wrapper>
        <div css={headerInner}>
          <div css={inputWrapper}>
            <div>
              <input
                type="text"
                placeholder="소환사명,챔피언···"                
                value={inputValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleClick}>
                <img src="/imgs/icon-gg.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
