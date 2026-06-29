import { config } from "dotenv";

config({ path: ".env" });

const envObj = {
  PORT: process.env.PORT,
};

const envConfig = Object.freeze(envObj);

export default envConfig;
