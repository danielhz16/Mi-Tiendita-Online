import styled from "styled-components";

export const Li = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    list-style: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 200ms ease, box-shadow 200ms ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:focus-within {
        outline: 2px solid #4caf50;
        outline-offset: 2px;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;;
        flex: 1;
        font-family: 'Inter', sans-serif;
        &:hover {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.default};
        }
    }

    i {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.default};
        margin-left: 1rem;
    }

    span {
        margin-left: 5rem;
        font-weight: 500;
    }
`;
