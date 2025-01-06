import styled from "styled-components";

export const OrderItemContainer = styled.div`
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 50rem;
  height: 10rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }
`;
