import styled from "styled-components";

export const Container = styled.div`
    border: solid 1px;
    padding: 2rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.default};
`