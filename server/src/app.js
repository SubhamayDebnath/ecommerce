import express from "express";

const app = express();

app.use(
  express.json({
    limit: "1mb",
  }),
);

app.use((req, res) => {
  const currentRoute = req.url;
  return res.status(404).json({
    message: `Route ${currentRoute} not found`,
    success: true,
  });
});

export default app;
