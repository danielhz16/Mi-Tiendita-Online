import styled from "styled-components";

export const Style = styled.div`
 width: 17rem;
 aspect-ratio: 1 / 1;
`

export const Text = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.default};
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-size: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`