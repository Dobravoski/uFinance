import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import express from "express";
import ImageKit from "@imagekit/nodejs";

dotenv.config({path: path.resolve(process.cwd(), "server/.env")});

const app = express();

const port = 3000;

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;

if (!privateKey) {
  throw new Error("Missing IMAGEKIT_PRIVATE_KEY");
}

if (!publicKey) {
  throw new Error("Missing IMAGEKIT_PUBLIC_KEY");
}

const imageKit = new ImageKit({
  privateKey,
});

app.use(cors());

app.get("/auth", async (_req, res) => {
  try {
    const authenticationParameters =
      imageKit.helper.getAuthenticationParameters();

    res.json({
      token: authenticationParameters.token,
      expire: authenticationParameters.expire,
      signature: authenticationParameters.signature,
      publicKey,
    });
  } catch (error) {
    console.error("Failed to generate ImageKit authentication", error);

    res.status(500).json({
      message: "Failed to generate ImageKit authentication.",
    });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`ImageKit auth server running on port ${port}`);
});