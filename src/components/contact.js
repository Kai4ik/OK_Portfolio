import React, { useState, useEffect } from "react";
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
  align-items: center;
  width: 55%;
  min-height: 50vh;
  padding: 0 5vw;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    align-items: center;
    margin-top: 5vh;
  }
`;

const FormField = styled.input.attrs((props) => ({
  type: props.inputType,
}))`
  width: 80%;
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
  width: 80%;
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

const SubmitBtn = styled.button`
  margin: 4vh 0;
  font-size: 1rem;
  font-weight: 700;
  background: transparent;
  color: #f4b301;
  border: 1px solid #f4b301;
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  transition: background 0.2s linear;
  &:hover {
    background: rgba(244, 179, 1, 0.5);
  }
`;

export default function ContactUs() {
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    message: "",
  });
  const handleChange = (event) => {
    let newUser = { ...userData };
    newUser[event.target.name] = event.target.value;
    setUserData(newUser);
  };

  const scroll = (e) => {
    document.getElementById(e.target.id).scrollIntoView();
  };

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
      <Form id="contactForm" method="POST">
        <FormField
          id="fullName"
          inputType="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          placeholder="Name"
          autocomplete="off"
          tabIndex="1"
          required
          onFocus={scroll}
        ></FormField>
        <FormField
          id="email"
          inputType="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          autocomplete="off"
          tabIndex="2"
          required
          onFocus={scroll}
        ></FormField>
        <Message
          id="message"
          name="message"
          value={userData.message}
          placeholder="Leave your message"
          tabIndex="3"
          onFocus={scroll}
        ></Message>
        <SubmitBtn form="contactForm" type="submit">
          get in touch
        </SubmitBtn>
      </Form>
    </ContactSection>
  );
}
