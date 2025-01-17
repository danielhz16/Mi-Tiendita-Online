import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, html, #root {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition:  0.2 ease-out;
    height: 100%;
    font-family: Noto Sans;
}
body {
  overflow: hidden;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
}
/* Estilos para pantallas grandes (PC) */
@media (min-width: 768px) {
  html,
  body {
    font-size: 1vw;
  }
}
//tablet
@media (min-width: 768px) and (max-width: 1024px) {
  html,
  body {
    font-size: 1.5vw;
  }
}
/* Estilos para pantallas pequeñas (móviles) */
@media (max-width: 767px) {
  html,
  body {
    font-size: 2vw;
  }
}   
`;