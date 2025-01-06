import styled from "styled-components";


const Table = styled.table`
 position: relative;
  margin-inline: auto;
  width: 80%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: scroll;


  th, td {
    border: none;
    padding: 12px 10px;
    text-align: left;
    transition: background-color 0.3s ease;
  }

  th {
    background: ${({ theme }) => theme.colors.default};
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  td {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.textColor};
  }

  td {
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.itemSecondary};
    }
  }
  .info {
    text-align: center;
  }
`;
export default Table;