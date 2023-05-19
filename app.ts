import express, { Request, Response, Express } from "express";
require('dotenv').config();
import { ApiRoutes } from "./src/routes";

class Main {
  private app: Express;
  private port: number | string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 6969;
  }
  public startServer(): void {
    this.app.use(ApiRoutes);
    this.app.listen(this.port, () => {
      console.log("\n[!] Server Started on Port", this.port, "\n");
    });
  }
}

new Main().startServer();
