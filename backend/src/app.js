import express from "express";
import cors from "cors";

import topProducts from "./routes/general/topProdcust.routes.js";
import searchProducts from "./routes/general/searchProducts.routes.js";
import getCategories from "./routes/general/category.routes.js";

import admCustomers from "./routes/operator/admCustumers.routes.js";
import admGetOrders from "./routes/operator/admGetOrders.routes.js";
import admOrders from "./routes/operator/admOrders.routes.js";
import admProducts from "./routes/operator/admProducts.routes.js";
import admUser from "./routes/operator/admUser.routes.js";
import category from "./routes/operator/category.routes.js";
import income from "./routes/operator/income.routes.js";
import status from "./routes/operator/status.routes.js";
import statusOrder from "./routes/operator/statusOrder.routes.js";

import cart from "./routes/user/cart.routes.js";
import customer from "./routes/user/customer.routes.js";
import orders from "./routes/user/orders.routes.js";
import products from "./routes/user/products.routes.js";
import user from "./routes/user/user.routes.js";
import getCategries from "./routes/user/getCategories.routes.js";
import auth from "./routes/auth/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(topProducts);
app.use(searchProducts);
app.use(getCategories);

app.use(admCustomers);
app.use(admGetOrders);
app.use(admOrders);
app.use(admProducts);
app.use(admUser);
app.use(category);
app.use(income);
app.use(status);
app.use(statusOrder);

app.use(cart);
app.use(customer);
app.use(orders);
app.use(products);
app.use(user);
app.use(getCategries);

app.use(auth);

export default app;