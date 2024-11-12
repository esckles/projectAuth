import express, { Application, Request, Response } from "express";
import cors from "cors";

import http from "node:http";
import { DefaultEventsMap, Server, Socket } from "socket.io";
import { dbConfig } from "./util/dbConfig";

import userModel from "./model";

const app: Application = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on(
  "connection",
  (
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  ) => {
    console.log("A user: ");

    socket.on("count", (res) => {
      io.emit("count", res);
    });

    socket.on("disconnect", () => {
      console.log("A user has been disconnected");
    });
  }
);

app.get("/api", async (req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).json({
      message: "Welcome to this API",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      error: error,
    });
  }
});

app.post(
  "/api/register",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password, schoolName, phoneNumber, image } =
        req.body;

      const user = await userModel.create({
        name,
        email,
        password,
        schoolName,
        phoneNumber,
        image,
      });
      return res
        .status(201)
        .json({ message: "create User", data: user, status: 201 });
    } catch (error) {
      return res.status(404).json({ message: "Error creating User" });
    }
  }
);

app.post(
  "/api/login",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password } = req.body;

      const user = await userModel.findOne({ email });

      if (user) {
        if (user.password === password) {
          return res
            .status(201)
            .json({ message: "user login", data: user, status: 201 });
        } else {
          return res.status(404).json({ message: "password error" });
        }
      } else {
        return res.status(404).json({ message: "email error" });
      }
      return res.status(201).json({ message: "create User", data: user });
    } catch (error) {
      return res.status(404).json({ message: "Error creating User" });
    }
  }
);

server.listen(4411, () => {
  dbConfig();
});
