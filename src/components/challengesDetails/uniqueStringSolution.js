import React, { useState } from "react";
import styled from "styled-components";

// import required components
import {
  ProblemSolutionContainer,
  ContainerTitle,
  InputField,
  Button,
  SubmitBtn,
  OutputContainer,
  OutputTitle,
  OutputText,
  SolutionTitle,
  SolutionImg,
} from "./solutionCommonComponents";

// code for algorithms
import UniqueStringCode from "../../challengesCode/uniqueStringAlgo";

const CaseSensitivityContainer = styled.div`
  font-size: 1.4rem;
  color: #fff;
`;

const CaseSensitivityCheckBox = styled.input`
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  -o-transform: scale(1.3); /* Opera */
  transform: scale(1.3);
`;

const CaseSensitivityLabel = styled.label`
  margin-left: 5px;
`;

const UniqueStringSolution = ({ data }) => {
  const [string, setString] = useState("");
  const [caseSensitivity, setCaseSensitivity] = useState(false);
  const [result, setResult] = useState({
    state: false,
    resultFromInput: "",
  });

  const handleSubmit = () => {
    const functionToExecute =
      data.problemTitle.toLowerCase() === "unique string"
        ? UniqueStringCode
        : null;
    setResult({
      ...result,
      state: true,
      resultFromInput: functionToExecute(string, caseSensitivity),
    });
  };

  return (
    <ProblemSolutionContainer>
      <ContainerTitle> {data.solutionTitle} </ContainerTitle>
      <InputField
        placeholder="Enter a string"
        type="text"
        onChange={(event) => setString(event.target.value)}
      />
      <Button>
        <CaseSensitivityContainer>
          <CaseSensitivityCheckBox
            type="checkbox"
            name="caseSensitivity"
            onChange={(e) => setCaseSensitivity(e.target.checked)}
          />
          <CaseSensitivityLabel> case-sensitive </CaseSensitivityLabel>
        </CaseSensitivityContainer>
        <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
      </Button>
      {result.state && (
        <OutputContainer>
          <OutputTitle> Output </OutputTitle>
          <OutputText> {result.resultFromInput} </OutputText>
        </OutputContainer>
      )}
      <SolutionTitle> Solution </SolutionTitle>
      <SolutionImg src={data.solution} alt="code solution" />
    </ProblemSolutionContainer>
  );
};

export default UniqueStringSolution;
