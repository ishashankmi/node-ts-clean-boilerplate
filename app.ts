import express, { Request, Response, Express } from "express";
import { ApiRoutes } from "./src/v1";
require('dotenv').config();


class Main {
  private app: Express;
  private port: number | string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
  }
  public startServer(): void {
    this.app.use(ApiRoutes);
    this.app.listen(this.port, () => {
      console.log("\n[!] Server Started on Port", this.port, "\n");
    });
  }
}

new Main().startServer();
