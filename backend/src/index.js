import app from "./app.js";
import dentov from "dotenv";

dentov.config();

app.listen(process.env.PORT, () =>  console.log(`Server on port ${process.env.PORT}`));
