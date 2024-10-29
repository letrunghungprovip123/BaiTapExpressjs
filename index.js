import express from "express";
import initModels from "./src/models/init-models.js";
import sequelize from "./src/models/connect.js";
import rootRoutes from "./src/routes/rootRoutes.js";
const app = express();

const model = initModels(sequelize);
app.use(express.json());

app.use(rootRoutes);

app.listen(8081, () => {
  console.log("Listening in port 8081");
});
