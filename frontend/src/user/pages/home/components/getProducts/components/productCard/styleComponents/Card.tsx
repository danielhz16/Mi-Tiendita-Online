import styled from "styled-components";

export const Card = styled.div`
    width: 20rem;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.bg};
    cursor: pointer;
    flex: 0 1 auto;
    display: grid;
    place-items: center;
    &:hover {
     transform: translate(-2px, -2px);
     scale: 1.1;
     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
   }
    img {
       aspect-ratio: 1 / 1;
       border-radius: 5px;
       width: 5rem;
       object-fit: cover;
    }
`