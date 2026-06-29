import app from "./app.js";
import envConfig from "./config/env.js";

const PORT = envConfig.PORT;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
