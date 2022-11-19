import express from "express";
import usersRoutes from "../src/routes/users.routes"
import loginRoutes from "./routes/session.routes";
import "dotenv/config"

const app = express();
app.use(express.json());
app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
    
const PORT = process.env.PORT || 3000

app.listen(PORT);

export default app