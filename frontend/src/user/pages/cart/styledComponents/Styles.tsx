import styled from "styled-components";

export const Style = styled.div`
    .p-orderlist-controls{
        display: none;
    }
    .p-orderlist-list {
        background-color: ${({ theme }) => theme.colors.item};
        height: 50rem;
    }
    .p-orderlist-item, span, .p-orderlist-header {
        color: ${({ theme }) => theme.colors.text} !important;
    }
    .p-orderlist-item {
        background-color: ${({ theme }) => theme.colors.bg};
        &:hover {
            background-color: ${({ theme }) => theme.colors.itemSecondary};
        }

    }
    .p-orderlist-header {
        background-color: ${({ theme }) => theme.colors.bg};
    }
    .p-orderlist .p-highlight {
  background-color: transparent !important; 
    color: inherit !important; 
     &:hover {
        background-color: ${({ theme }) => theme.colors.itemSecondary} !important;
     }
     .p-orderlist-list-container {
         height: 60rem;
     }

}

`