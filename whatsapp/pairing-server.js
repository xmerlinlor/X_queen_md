import "dotenv/config";
import express from "express";
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason
} from "@whiskeysockets/baileys";
import pino from "pino";
import fs from "fs";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const sessions = new Map();

app.get("/", (req, res) => {
  res.json({
    bot: "QUEEN MD",
    status: "online",
    service: "WhatsApp Pairing"
  });
});

app.post("/pair", async (req, res) => {
  try {
    const { number } = req.body;

    if (!number) {
      return res.status(400).json({
        success: false,
        message: "WhatsApp number is required."
      });
    }

    const phoneNumber = String(number).replace(/\D/g, "");

    if (phoneNumber.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Invalid WhatsApp number."
      });
    }

    const sessionPath = `./session/${phoneNumber}`;

    fs.mkdirSync(sessionPath, { recursive: true });

    const { state, saveCreds } =
      await useMultiFileAuthState(sessionPath);

    const sock = makeWASocket({
      auth: state,
      logger: pino({ level: "silent" }),
      printQRInTerminal: false
    });

    sock.ev.on("creds.update", saveCreds);

    sessions.set(phoneNumber, sock);

    if (!sock.authState?.creds?.registered) {
      const code = await sock.requestPairingCode(phoneNumber);

      return res.json({
        success: true,
        number: phoneNumber,
        pairingCode: code
      });
    }

    return res.json({
      success: true,
      number: phoneNumber,
      message: "This number is already paired."
    });

  } catch (error) {
    console.error("Pairing error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate pairing code.",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 WhatsApp pairing server running on port ${PORT}`);
});
