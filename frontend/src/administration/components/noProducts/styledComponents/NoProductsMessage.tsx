import styled from "styled-components";

export const  NoProductsMessage = styled.p`

  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  padding: 3rem;
  border-radius: 8px;
  width: 100%;
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.default};
`;