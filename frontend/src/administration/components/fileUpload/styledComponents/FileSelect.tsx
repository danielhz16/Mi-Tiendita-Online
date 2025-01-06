import styled from "styled-components";

export const FileSelect = styled.div`
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.default};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 1rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: 50%;
  width: 10rem;
  aspect-ratio: 1 / 1;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.default};
  }

  &.dragover {
    background-color: ${({ theme }) => theme.colors.defaultSecondary};
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.default};
  }
`;
