import styled from "styled-components";

export const VerticalArrow = styled.div`
  height: ${(props) => props.lineHeight};
  width: 2px;
  background-color: #ccd6f6;
`;

export const NavSection = styled.section`
  position: fixed;
  top: 0;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 8vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #ccd6f6;
  font-size: 24px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
