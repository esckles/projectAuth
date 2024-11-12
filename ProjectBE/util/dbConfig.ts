import { connect } from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/nextGenDB";

export const dbConfig = async () => {
  await connect(url).then(() => {
    console.clear();
    console.log("db connected...❤️❤️🚀🚀");
  });
};
