import styled from "styled-components";

export const ProblemSolutionContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  overflow-y: scroll;
  @media only screen and (max-width: 768px) {
    position: relative;
    width: 100vw;
    height: auto;
  }
`;

export const ContainerTitle = styled.h2`
  font-size: 2.2rem;
  color: #f4b301;
`;

export const InputField = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 6px;
  font-size: 1.2rem;
  border: none;
  outline: none;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const SubmitBtn = styled.button`
  width: 120px;
  border-radius: 8px;
  border: none;
  background: #f4b301;
  padding: 0.7rem;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  &:hover {
    background: #ccd6f6;
  }
`;

export const OutputContainer = styled.div`
  border-radius: 8px;
  background: #fff;
  width: 100%;
  padding: 1rem 2rem;
  margin: 2vh 0;
`;

export const OutputTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  height: auto;
`;

export const OutputText = styled.p`
  font-weight: 200;
  font-size: 1.4rem;
  height: auto;
`;

export const SolutionTitle = styled.h2`
  font-size: 2.2rem;
  color: #f4b301;
  margin: 16px 0;
`;

export const SolutionImg = styled.img`
  width: 100%;
  border-radius: 12px;
`;
