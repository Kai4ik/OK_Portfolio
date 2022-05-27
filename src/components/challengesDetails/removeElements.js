import React, { useState } from "react";
import styled from "styled-components";

// import required components
import {
  ProblemSolutionContainer,
  ContainerTitle,
  InputField,
  SubmitBtn,
  OutputContainer,
  OutputTitle,
  OutputText,
  SolutionTitle,
  SolutionImg,
} from "./solutionCommonComponents";

// code for algorithms
import removeElement from "../../challengesCode/removeElementAlgo";

const OtherBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const RemoveValue = styled.input`
  padding: 1rem;
  width: 20%;
  border-radius: 6px;
  font-size: 1.2rem;
  border: none;
  outline: none;
`;

const RemoveElementSolution = ({ data }) => {
  const [array, setArray] = useState("");
  const [removeValue, setRemoveValue] = useState(null);

  const [result, setResult] = useState({});
  const [resultState, setResultState] = useState(false);

  const handleSubmit = () => {
    const newResult = removeElement(array.split(","), removeValue);
    setResultState(true);
    setResult(newResult);
  };

  return (
    <ProblemSolutionContainer>
      <ContainerTitle> {data.solutionTitle} </ContainerTitle>
      <InputField
        placeholder="Enter comma-separated array"
        type="text"
        onChange={(event) => setArray(event.target.value)}
      />
      <OtherBtns>
        <RemoveValue
          placeholder="value to delete"
          type="text"
          onChange={(event) => setRemoveValue(event.target.value)}
        />
        <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
      </OtherBtns>

      {resultState && (
        <OutputContainer>
          <OutputTitle> Output </OutputTitle>
          <OutputText>
            [
            {result.array.map((number, index) => (
              <span> {index < result.length ? number : "_"},</span>
            ))}
            ]
          </OutputText>
        </OutputContainer>
      )}
      <SolutionTitle> Solution </SolutionTitle>
      <SolutionImg src={data.solution} alt="code solution" />
    </ProblemSolutionContainer>
  );
};

export default RemoveElementSolution;
