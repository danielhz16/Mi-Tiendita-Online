import styled from "styled-components";

export const TimelineContainer = styled.div`
width: 100%;
max-width: 800px;
margin-top: 20px;
padding: 15px;
background-color:  ${({ theme }) => theme.colors.bg};
border-radius: 8px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translate(-2px, -2px);
  }
`;
