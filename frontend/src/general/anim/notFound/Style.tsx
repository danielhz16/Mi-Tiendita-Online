import styled from "styled-components";

export const Style = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.div`
    .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    background-color: blue; 
    color: white;
    border: none;
    cursor: pointer;
  }
`