import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import routes from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";

createConnection().then(async () => {
  const api = express();

  const PORT = process.env.PORT || 3500;

  api.use(cors());
  api.use(express.json());
  api.use("/", routes);
  api.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  api.listen(PORT, () => {
    console.log(`Servidor inicializado na url http://localhost:${PORT}`);
  });
}).catch((error) => console.log(error));
 