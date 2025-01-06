import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 25rem; 
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  z-index: 999;
  transition: 500ms ease-in-out;
  transform: translateX(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  &.close {
    transform: translateX(-150%);
    i {
        display: none;
    }
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
