import styled from "styled-components";

export const Container = styled.div`
position: relative;
margin: 1rem 1rem;
height: 96%;
background-color: ${({ theme }) => theme.colors.primary};
display: grid;
place-items: center;
width: 20rem;
border-radius: 1rem;
transition: ease-in-out 200ms;
 &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
 }
&.close {
width: 6rem;
display: grid;
place-items: center; 
 
 span {
    display: none;
 }
}
.toggle-menu {
  cursor: pointer;
  position: absolute;
  right: -0.5rem;
}
i {
   color: ${({ theme }) => theme.colors.default};
}
`;