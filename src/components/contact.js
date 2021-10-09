import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "@formspree/react";
import * as Scroll from "react-scroll";
import $ from "jquery";

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
  color: #ccd6f6 !important;
  font-size: 1.4rem;
  margin-bottom: 4vh;
  transition: border 0.5s linear;
  &:focus,
  &:active {
    border: 1px solid #ccd6f6;
  }
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
  &:focus,
  &:active {
    border: 1px solid #ccd6f6;
  }
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
  &:enabled:hover {
    background: rgba(244, 179, 1, 0.5);
  }
  &:disabled:hover {
    background: rgba(237, 41, 57, 0.5);
  }
`;

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mknkeyaj");
  const [disabled, setDisabled] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    message: "",
  });
  const scroll = Scroll.animateScroll;
  const width = window.innerWidth;

  const handleChange = (event) => {
    console.log(state);
    let newUser = { ...userData };
    newUser[event.target.name] = event.target.value;
    setUserData(newUser);
  };

  const handleForm = () => {
    const newUser = {
      email: "",
      fullName: "",
      message: "",
    };
    setUserData(newUser);
  };

  useEffect(() => {
    setDisabled(
      userData.email !== "" && userData.fullName !== "" ? false : true
    );
  }, [userData]);

  const scrollToNext = () => {
    scroll.scrollMore(width > 768 ? 0 : 400);
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
      <Form
        id="contactForm"
        method="POST"
        onSubmit={(e) => {
          handleSubmit(e);
          handleForm();
        }}
      >
        <FormField
          inputType="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          placeholder="Name"
          onFocus={() => (document.body.scrollTop = $(this).offset().top)}
          onBlur={scrollToNext}
          required
          autoComplete="off"
        ></FormField>
        <FormField
          inputType="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          onFocus={() => (document.body.scrollTop = $(this).offset().top)}
          onBlur={scrollToNext}
          required
          autoComplete="off"
        ></FormField>
        <Message
          name="message"
          value={userData.message}
          onChange={handleChange}
          onFocus={() => (document.body.scrollTop = $(this).offset().top)}
          onBlur={scrollToNext}
          placeholder="Leave your message"
        ></Message>
        <SubmitBtn form="contactForm" type="submit" disabled={disabled}>
          get in touch
        </SubmitBtn>
      </Form>
    </ContactSection>
  );
}
