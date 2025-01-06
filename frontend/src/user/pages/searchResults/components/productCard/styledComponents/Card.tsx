import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    gap: 1rem;
    width: 45rem;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 1rem;
    border-radius: 10px;
     &:hover {
     transform: translate(-10px, -10px);
     }
    img {
       width: 10rem;
       border-radius: 10px;
       aspect-ratio: 1 / 1;
       object-fit: cover;
    }
     .price {
        margin-left: auto;
        display: flex;
        gap: 1rem;
     }
     button {
      aspect-ratio: 1 / 1;
     }
`