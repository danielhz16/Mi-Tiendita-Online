import styled from "styled-components";

export const Form = styled.form`
  place-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
  min-height: 25rem;
  .height {
    height: 100rem !important;
  }
   input {
    position: relative;
   }
   .bi {
     position: absolute;
     right: 0.5rem;
     top: 50%;
     transform: translateY(-50%);
   }
   .p-password-input {
    width: 14rem;
   }
   display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
     &:hover {
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
      transform: translate(-2px, -2px);
    }
    gap: 2rem;
   grid-template-columns: 1fr 1fr;
   @media(max-width: 767px) {
        grid-template-columns: 1fr;
        input {
        width: 25rem;
        font-size: 2rem;
        }
    }
   textarea {
    height: 5rem;
   }
   .p-dropdown, .p-inline-message {
      width: 15.3rem;
     }
   .small {
    width: 3rem;
   }
`;

