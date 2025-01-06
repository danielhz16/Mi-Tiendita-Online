import styled from "styled-components";

export const Card = styled.div`
  width: 50rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    transform: translate(-3px, -3px);
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;
