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
import {
  reverseString,
  reversedStringWithoutBuiltinFns,
} from "../../challengesCode/reverseStringAlgo";

const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 12px;
`;

const InputType = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  padding-top: 1px;
  letter-spacing: 1px;
`;

const BuiltInFnsContainer = styled.div`
  font-size: 1.4rem;
  color: #fff;
`;

const BuiltInFnsCheckBox = styled.input`
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  -o-transform: scale(1.3); /* Opera */
  transform: scale(1.3);
`;

const BuiltInFnsLabel = styled.label`
  margin-left: 5px;
`;

const ReverseStringSolution = ({ data }) => {
  const [string, setString] = useState("");
  const [type, setType] = useState("array");
  const [builtInFns, setBuiltInFns] = useState(true);
  const [result, setResult] = useState([]);
  const [resultState, setResultState] = useState(false);

  const handleSubmit = () => {
    setResultState(true);
    setResult(
      builtInFns
        ? reverseString(type === "array" ? string.split("") : string, type)
        : reversedStringWithoutBuiltinFns(
            type === "array" ? string.split("") : string,
            type
          )
    );
  };

  return (
    <ProblemSolutionContainer>
      <ContainerTitle> {data.solutionTitle} </ContainerTitle>
      <InputField
        placeholder="Enter a string"
        type="text"
        onChange={(event) => setString(event.target.value)}
      />
      <TypesContainer>
        <InputType> Input Type: </InputType>
        <BuiltInFnsContainer>
          <input
            type="radio"
            name="type"
            value="string"
            onChange={(e) => setType(e.currentTarget.value)}
          />
          <label> string </label>
        </BuiltInFnsContainer>
        <BuiltInFnsContainer>
          <input
            type="radio"
            name="type"
            value="array"
            onChange={(e) => setType(e.currentTarget.value)}
          />
          <label> array </label>
        </BuiltInFnsContainer>
      </TypesContainer>
      <Button>
        <BuiltInFnsContainer>
          <BuiltInFnsCheckBox
            type="checkbox"
            name="builtInFns"
            checked={builtInFns}
            onChange={(e) => setBuiltInFns(e.target.checked)}
          />
          <BuiltInFnsLabel> use reverse() built-in function </BuiltInFnsLabel>
        </BuiltInFnsContainer>
        <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
      </Button>
      {resultState && (
        <OutputContainer>
          <OutputTitle> Output </OutputTitle>
          <OutputText>
            {type === "string" ? result : `[ ${result.toString()} ]`}
          </OutputText>
        </OutputContainer>
      )}
      <SolutionTitle> Solution </SolutionTitle>
      <SolutionImg src={data.solution} alt="code solution" />
    </ProblemSolutionContainer>
  );
};

export default ReverseStringSolution;
