import React from "react";
import styled from "styled-components";

// used to hash object which is used as a key
import hash from "object-hash";

// used to convert strings containing HTML into React components
const HtmlToReactParser = require("html-to-react").Parser;

const ProblemStatementContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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

const ContainerTitle = styled.h2`
  font-size: 2.2rem;
  color: #f4b301;
`;

const ProblemStatementText = styled.p`
  font-size: 1.4rem;
  color: #ccd6f6;
  height: auto;
`;

const ExamplesTitle = styled(ContainerTitle)`
  margin-top: 2vh;
`;

const SampleTitle = styled.h4`
  color: #ccd6f6;
  font-size: 1.4rem;
`;

const ExampleContainer = styled.div`
  border-radius: 8px;
  background: #ccd6f6;
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 14px;
`;

const ExampleInput = styled.div`
  display: flex;
  gap: 10px;
`;

const ExampleInputTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  height: auto;
`;

const ExampleInputValue = styled(ExampleInputTitle)`
  font-weight: 200;
`;

const ExampleOutput = styled.div`
  display: flex;
  gap: 10px;
`;

const ExampleOutputTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  height: auto;
`;

const ExampleOutputValue = styled(ExampleInputTitle)`
  font-weight: 200;
`;

const ProblemDescription = ({ data }) => {
  const htmlToReactParser = new HtmlToReactParser();

  return (
    <ProblemStatementContainer>
      <ContainerTitle> Problem Statement</ContainerTitle>
      <ProblemStatementText> {data.problemTitle} </ProblemStatementText>
      <ProblemStatementText>
        {htmlToReactParser.parse(data.problemStatement)}
      </ProblemStatementText>
      <ExamplesTitle>Examples</ExamplesTitle>
      {data.examples.map((example, index) => (
        <React.Fragment key={hash(example)}>
          <SampleTitle> Sample {index + 1} </SampleTitle>
          <ExampleContainer>
            <ExampleInput>
              <ExampleInputTitle> Input: </ExampleInputTitle>
              <ExampleInputValue> {example.input}</ExampleInputValue>
            </ExampleInput>
            <ExampleOutput>
              <ExampleOutputTitle> Output: </ExampleOutputTitle>
              <ExampleOutputValue> {example.output} </ExampleOutputValue>
            </ExampleOutput>
          </ExampleContainer>
        </React.Fragment>
      ))}
    </ProblemStatementContainer>
  );
};

export default ProblemDescription;
