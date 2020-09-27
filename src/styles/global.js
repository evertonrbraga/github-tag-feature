import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
