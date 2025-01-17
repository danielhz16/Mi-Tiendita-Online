import express from "express";
import cors from "cors";
import auth from "./auth/routes/auth.routes.js";


import search from "./general/search/routes/search.routes.js";
import topProducts from "./general/top/routes/topProducts.routes.js";

import admCustomers from "./operator/admCustomers/routes/admCustomer.routes.js";
import admOrders from "./operator/admOrders/routes/admOrders.routes.js";
import admPrducts from "./operator/admProducts/routes/admProducts.routes.js";
import admUsers from './operator/admUser/routes/admUser.routes.js';
import admCategories from './operator/category/routes/category.routes.js';
import income from './operator/Incomes/routes/income.routes.js';
import orderStatus from './operator/statusOrders/routes/statusOrders.routes.js'

import cart from './user/cart/routes/cart.routes.js';
import getCategories from './user/getCategories/routes/getCategories.routes.js';
import customer from './user/customer/routes/customer.routes.js';
import orders from './user/orders/routes/orders.routes.js';
import products from './user/products/routes/products.routes.js';
import user from './user/user/routes/user.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(auth);
app.use(getCategories);
app.use(search);
app.use(topProducts);

app.use(admCustomers);
app.use(admOrders);
app.use(admPrducts);
app.use(admUsers);
app.use(admCategories);
app.use(income);
app.use(orderStatus);

app.use(cart);
app.use(getCategories);
app.use(customer);
app.use(orders);
app.use(products);
app.use(user);

export default app;
