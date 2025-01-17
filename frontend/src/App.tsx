import { AuthProvider } from "./context/authContext/AuthContext";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/style/themes";
import { useState } from "react";
import { GlobalStyle } from "./styles/style/globalStyles";
import { MenuProvider } from "./context/menuContext/MenuContext";
import { CartProveider } from "./context/cartContext/CartContext";
import { ProductsProvider } from "./context/productsCotext/ProductsContext";
import { CategoriesProvider } from "./context/categoryContext/categoryContext";


import { NotFound } from "./general/anim/notFound/NotFound";
import Suspend from "./auth/suspend/Suspend";

import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RouteProtector from "./routes/protector/RouteProtector";
import Root from "./routes/root/Root";

import { Home } from "./user/pages/home/Home";
import SearchResults from "./user/pages/searchResults/SearchResults";
import ViewProduct from "./user/pages/viewProduct/ViewProduct";
import Cart from "./user/pages/cart/Cart";
import Customer from "./user/pages/customer/Customer";
import Order from "./user/pages/order/Order";
import Invoice from "./user/pages/Invoice/Invoice";
import Orders from "./user/pages/orders/Orders";
import ViewOrder from "./user/pages/viewOrder/ViewOrder";
import User from "./user/pages/user/User";

import Dashboard from "./administration/pages/dashboard/Dashboard";
import NewProduct from "./administration/pages/newProduct/NewProduct";
import Products from "./administration/pages/products/Products";
import UpdateProduct from "./administration/pages/updateProduct/UpdateProduct";
import Categories from "./administration/pages/categories/Categories";
import AddStock from "./administration/pages/addStock/AddStock";
import OrdersList from "./administration/pages/ordersList/OrdersList";
import Users from "./administration/pages/users/Users";
import NewCategory from "./administration/pages/newCategory/NewCategory";
import Customers from "./administration/pages/cutomer/Customer";
import EditCustomer from "./administration/pages/editCustomer/EditCustomer";

import { routes } from "./routes/routes";
import { routesOperator } from "./routes/routes";
import MenuOperator from "./administration/components/menu/MenuOperator";
import Header from "./user/components/header/Header";

import { Toaster } from "react-hot-toast";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme);
  const toggleTheme = () => {
    setTheme(theme.name === "light" ? darkTheme : lightTheme);
    localStorage.setItem("theme", theme.name === "light" ? "dark" : "light");
  }
  
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <MenuProvider>
          <CartProveider>
           <ProductsProvider>
            <CategoriesProvider>
            <GlobalStyle />
            <Toaster />
            <BrowserRouter>
              <Routes>
                <Route path={routes.login} element={<Login />} />
                <Route path={routes.register} element={<Register />} />
                <Route 
                  element={
                    <RouteProtector 
                      role={2} 
                      redirect={routesOperator.dashboard} 
                      component={<Header toggleTheme={toggleTheme} theme={theme.name} />} 
                    />
                  }
                >
                  <Route path={routes.home} element={<Home />} />
                  <Route path={`${routes.search}/:search`} element={<SearchResults />} />
                  <Route path={`${routes.viewProduct}/:product`} element={<ViewProduct />} />	
                  <Route path={routes.cart} element={<Cart />} />
                  <Route path={`${routes.customer}/:complete`} element={<Customer />} />
                  <Route path={`${routes.orderComplete}/:id_user`} element={<Order />} />
                  <Route path={`${routes.Invoice}/:id_order`} element={<Invoice />} />
                  <Route path={routes.orders} element={<Orders />} />
                  <Route path={`${routes.viewOrder}/:id_order`} element={<ViewOrder />} />
                </Route> 
                <Route 
                  element={
                    <RouteProtector 
                      role={1} 
                      redirect={routes.home} 
                      component={<MenuOperator theme={theme.name} toggleTheme={toggleTheme} />} 
                    />
                  }
                >
                  <Route path={routesOperator.dashboard} element={<Dashboard />} />
                  <Route path={routesOperator.newProduct} element={<NewProduct />} />
                  <Route path={routesOperator.listProducts} element={<Products />} />
                  <Route path={`${routesOperator.updateProduct}/:id`} element={<UpdateProduct />} />
                  <Route path={routesOperator.categories} element={<Categories />} />
                  <Route path={routesOperator.addStock} element={<AddStock />} />
                  <Route path={routesOperator.ordersList} element={<OrdersList />} />
                  <Route path={routesOperator.users} element={<Users />} />
                  <Route path={routesOperator.NewCategory} element={<NewCategory />} />
                  <Route path={routesOperator.customers} element={<Customers />} />
                  <Route path={`${routesOperator.editCustomer}/:id`} element={<EditCustomer />} />
                </Route>
                <Route path="/" element={<Root />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="404" element={<NotFound />} />
                <Route path={routes.user} element={<User />} />
                <Route path={routes.suspend} element={<Suspend />} />
              </Routes>
            </BrowserRouter>
            </CategoriesProvider>
           </ProductsProvider>
          </CartProveider>
        </MenuProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
