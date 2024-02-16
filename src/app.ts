import "express-async-errors";
import express from "express";
import cors from "cors";
import { routes } from "./routers/index.route";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
const staticPath = path.join(__dirname, "../docs");
app.use("/api-docs", express.static(staticPath));
app.get("/api-docs", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});
app.use(handleErrors);

const PORT: number = parseInt(process.env.PORT!) || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;
