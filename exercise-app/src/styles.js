import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap');

  .App {
    text-align: center;
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .exercise-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .exercise-button {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #61dafb;
    color: #282c34;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .exercise-button:hover {
    background-color: #21a1f1;
  }
`;

export default GlobalStyle;
