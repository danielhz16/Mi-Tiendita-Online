import { routesOperator } from "../../../../routes/routes"
import { routes } from "../../../../routes/routes"

export const items = [
    {
        name: 'Ordenes',
        link: routesOperator.ordersList,
        icon: 'pi pi-box'
    },
    {
        name: 'dahsboard',
        link: routesOperator.dashboard,
        icon: 'pi pi-chart-line'
    },
    {
        name: 'Nuevo Producto',
        link: routesOperator.newProduct,
        icon: 'pi pi-plus'
    },
    {
        name: 'Productos',
        link: routesOperator.listProducts,
        icon: 'pi pi-list'
    },
    {
        name: 'categorias',
        link: routesOperator.categories,
        icon: 'pi pi-tag'
    },
    {
        name: 'Nueva Categoria',
        link: routesOperator.NewCategory,
        icon: 'pi pi-tag'
    }
    ,
    {
        name: 'Agregar Stock',
        link: routesOperator.addStock,
        icon: 'pi pi-plus'
    },
    {
        name: 'Usuarios',
        link: routesOperator.users,
        icon : 'pi pi-users'
    },
    {
        name: 'Usuario',
        link: routes.user,
        icon : 'pi pi-user'
    },
    {
        name: 'Registrar Usuario',
        link : routes.register,
        icon : 'pi pi-user-plus'
    }
]
 
