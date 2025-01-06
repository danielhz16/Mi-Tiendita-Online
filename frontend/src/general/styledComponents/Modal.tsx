import styled from "styled-components";
export const Modal= styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  z-index: 999;
   form {
    display: grid;
    gap: 1.5rem;
   }
   button {
    margin-top: 1rem;
   }
`;

