import styled from "styled-components";

export const Li = styled.li`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-out, transform 0.2s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(5px);
  }
  i {
    margin-right: 2rem;
  }
&.close {
display: flex;
 i {
    margin-inline: auto;
 }
 }
`;