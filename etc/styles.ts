import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: black;
    --color-bg: white;
   }
   @media (prefers-color-scheme: dark) {
      :root {
          --color-text: white;
          --color-bg: black;
       }
   }
`;

export const theme = {
  text: "var(--color-text)",
  bg: "var(--color-bg)",
};
