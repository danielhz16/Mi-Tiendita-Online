import styled from "styled-components";

export const FormCustomer = styled.form`
background-color: ${({ theme }) => theme.colors.bg};
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
height: auto;
border-radius: 1rem;
box-shadow: rgba(0, 0, 0, 0.35) 0 0 3px;
padding: 3rem;
font-size: 1rem;;
 &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 0 5px;
    transform: translate(-2px, -2px);
 }
 @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`