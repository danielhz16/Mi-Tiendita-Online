import styled from "styled-components";

export const Switch = styled.div`
  cursor: pointer;
  margin-left: auto;
  height: 2.2rem;
  width: 4rem;
  border-radius: 1rem;
  background-color: #1b1a1a;
  box-shadow: 0 0 2px black;
  display: flex;
  align-items: center;
  padding: 5px;
   &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 0 6px 12px ${({ theme }) => theme.colors.default};
   }
  .bi-moon-stars-fill {
    color: white;
    margin-left: auto;
    font-size: 1rem;
   }
   .bi-brightness-low-fill {
    color: yellow;
    font-size: 2rem;
   }
`;