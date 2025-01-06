import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   padding: 1rem;
   background-color: ${({ theme }) => theme.colors.primary};
    .bi {
      font-size: 2rem;
    }
`