import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
     input {
        width: 9rem;
     }
     &.inputs-small {
      input {
        width: 5rem;
      }
     }
     &.column {
      flex-direction: column; 
      align-items: normal;
     }
`;