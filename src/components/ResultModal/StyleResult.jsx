import { styled } from "styled-components";

const StyleResult = styled.dialog`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  background-color: #d7fcf8;

  &[open] {
    animation: slide-in-from-top 0.35s ease-out;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.9);
  }

  & h2 {
    font-family: "Handjet", monospace;
    margin: 0 0 0.25rem 0;
    font-size: 3rem;
    text-transform: uppercase;
  }

  & progress {
    width: 100%;
    height: 1.5rem;
    margin: 0;
    accent-color: #46cebe;
  }

  .result-modal p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }

  & p strong {
    color: #10655b;
  }

  & form {
    text-align: right;
  }

  & button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background: #12352f;
    color: #edfcfa;
    font-size: 1.2rem;
    cursor: pointer;
  }

  & button:hover {
    background: #051715;
  }
`;

export default StyleResult;
