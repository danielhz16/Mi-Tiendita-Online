import app from "./app.js";
import dentov from "dotenv";

dentov.config();

app.listen(process.env.PORT || 3000);
console.log("Server on port", process.env.PORT || 3000);
