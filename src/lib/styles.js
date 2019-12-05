import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: #303539;
  margin: 0;
  padding: 0;
  height: 10vh;
  width: 100vw;
`;

export const SignUpButton = styled.button`
  height: 50%;
  margin: auto 1em;
  border-radius: 5px;
  border: 1px solid #303539;
  background: transparent;
  box-shadow: 0 0 3px black;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  outline: none;
  transition: all 0.1s;
  &::-moz-focus-inner {
    border:0;
  }
  &:hover {
        color: white;
    }

  &:active {
        transform: scale(1.15);
        color:white
        
`;

export const HeaderLink = styled.a`
  width: 50%;
  display: flex;
  align-items: center;
  outline: none;
  height: 100%;
  margin: 0 1em;
`;

export const HeaderImage = styled.img`
  width: auto;
  height: 50%;
`;
