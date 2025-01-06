import { routes } from "../../../../routes/routes"
export const itemsMenu = [
    { name: "Inicio", icon: "pi pi-home", link: routes.home },
    { name: "Carrito", icon: "pi pi-shopping-cart", link: routes.cart },
    { name: "Mis pedidos", icon: "pi pi-box", link: routes.orders },
    { name: "Datos de Envio", icon: "pi pi-truck", link: `${routes.customer}/false` },
    { name: "Mi perfil", icon: "pi pi-user", link: routes.user },
];