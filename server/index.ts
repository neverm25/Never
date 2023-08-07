// #region Global Imports
import next from "next";
import express from "express";
import path from "path";
// #endregion Global Imports

// #region Local Imports
import routes from "./routes";
// #endregion Local Imports

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  if (process.env.STATIC_PATH !== undefined) {
    app.setAssetPrefix(process.env.STATIC_PATH);
    server.use(express.static(path.join(__dirname, "../public/static")));
  }

  server.all("*", (req, res) => handler(req, res));

  server.listen(port);
});
