import React from "react";
import styled from "styled-components";

const ContactSection = styled.div`
  display: flex;
  width: 80vw;
  min-height: 50vh;
  margin: 5vh 10vw;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  color: #ccd6f6;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
  padding-left: 5rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const ContactSectionTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: #f4b301;
  margin-bottom: 4vh;
`;

const ProjectsText = styled.div`
  font-size: 1.3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 55%;
  min-height: 50vh;
  padding: 0 5vw 0 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    align-items: center;
    margin-top: 5vh;
  }
`;

const FormField = styled.input.attrs({
  type: "text",
})`
  width: 70%;
  height: 60px;
  border: 1px solid #f4b301;
  background: none;
  outline: none;
  padding: 0 1rem;
  color: #ccd6f6;
  font-size: 1.4rem;
  margin-bottom: 4vh;
  transition: border 0.5s linear;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Message = styled.textarea`
  width: 70%;
  height: 150px;
  border: 1px solid #f4b301;
  background: none;
  outline: none;
  padding: 1rem;
  color: #ccd6f6;
  font-size: 1.4rem;
  resize: none;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function ContactUs() {
  return (
    <ContactSection id="contact">
      <ContactTextSection>
        <ContactSectionTitle>Let's Get In Touch</ContactSectionTitle>
        <ProjectsText>
          Have any questions about any of my projects? Or have any other
          requests or questions about me? My inbox is always open! Don't
          hesitate to use the form and I'll try my best to get back to you !
        </ProjectsText>
      </ContactTextSection>
      <Form>
        <FormField placeholder="Name" autocomplete="off"></FormField>
        <FormField placeholder="Email" autocomplete="off"></FormField>
        <Message placeholder="Leave your message"></Message>
      </Form>
    </ContactSection>
  );
}
