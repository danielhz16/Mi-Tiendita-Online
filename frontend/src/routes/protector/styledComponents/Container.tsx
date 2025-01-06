import styled from "styled-components";

export const Container = styled.div`
 background-color: ${({ theme }) => theme.colors.bgSecondary};

  &.operator {
    display: flex;
    height: 100%;
  }
`