import React from "react";
import styled from "styled-components";
import { NavSection, VerticalArrow } from "./reusableElements";

import analytics from "../firebase/config";
import { logEvent } from "firebase/analytics";

const Email = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #ccd6f6;
  &:hover {
    color: #f4b301;
  }
`;

export default function RightNavigation() {
  return (
    <NavSection right="0">
      <Email
        href="mailto:orozobekov.kai@gmail.com"
        onClick={() => logEvent(analytics, "email", { open_email: "clicked" })}
      >
        orozobekov.kai@gmail.com
      </Email>
      <VerticalArrow lineHeight="28vh"></VerticalArrow>
    </NavSection>
  );
}
