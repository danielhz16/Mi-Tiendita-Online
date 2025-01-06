import styled from "styled-components";

export const Container = styled.div`
    width: 12rem;
    height: 10rem;
    border: solid 1px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
     strong {
        color: ${({ theme }) => theme.colors.default};
     }
`