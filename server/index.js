import express from "express";
import path from "path";
import secure from "express-sslify";

const app = express();

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "../client/build")));

if (process.env.PORT) {
  console.log("PORT EXISTS");
  app.use(
    secure.HTTPS({
      trustProtoHeader: true,
    })
  );
}

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/../client/build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on port " + port + "...");
});
