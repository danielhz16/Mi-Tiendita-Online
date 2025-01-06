import styled from "styled-components";

export const MainInfo = styled.div`
  display: grid;
  place-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 45rem;
 
  img {
    width: 20rem;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: ease-in-out 200ms;
     &:hover {
       scale: 1.5;
     }
  }
`;