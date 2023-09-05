import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { DeviceThemeProvider } from '@salutejs/plasma-ui';
import { gradient } from '@salutejs/plasma-tokens';
import { darkSber } from '@salutejs/plasma-tokens/themes';
import { sberBox } from '@salutejs/plasma-tokens/typo';

import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
const StyledPreview = styled.div`
    ${darkSber[":root"]};
    ${sberBox[":root"]};

    height: 100%;
    background: rgba(0,0,0,0);

    padding: 1rem;

    > div { 
        display: flex; 
        gap: 1rem;
    }
`
ReactDOM.render(
  <DeviceThemeProvider responsiveTypo>
        <StyledPreview>
    <App />
  </StyledPreview>
    </DeviceThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
