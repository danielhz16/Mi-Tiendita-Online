import styled from "styled-components";

export const ImagePreview = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  img {
    width: 7rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    background-color: white;
    &:hover {
    height: 20rem;
    width: 20rem;
    position: fixed;
    z-index: 999;
  }
  }
`;