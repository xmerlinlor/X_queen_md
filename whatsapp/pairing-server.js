import "dotenv/config";
import express from "express";
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason
} from "@whiskeysockets/baileys";
import pino from "pino";
import fs from "fs";

import { handleCommand } from "../commands/handler.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const sessions = new Map();


// ╭━━━〔 👑 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 〕━━━╮
// │  ╰─➤ WHATSAPP PAIRING
// ╰━━━━━━━━━━━━━━━━━━━━╯


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

    fs.mkdirSync(sessionPath, {
      recursive: true
    });

    const { state, saveCreds } =
      await useMultiFileAuthState(sessionPath);

    const sock = makeWASocket({
      auth: state,
      logger: pino({ level: "silent" }),
      printQRInTerminal: false
    });

    sock.ev.on("creds.update", saveCreds);

    sessions.set(phoneNumber, sock);


    // 📩 WHATSAPP COMMAND HANDLER

    sock.ev.on("messages.upsert", async ({ messages }) => {
      try {
        const message = messages[0];

        if (!message?.message) return;

        await handleCommand(sock, message);

      } catch (error) {
        console.error(
          "❌ Command handler error:",
          error
        );
      }
    });


    // 🔌 CONNECTION STATUS

    sock.ev.on(
      "connection.update",
      ({ connection, lastDisconnect }) => {

        if (connection === "open") {
          console.log("");
          console.log(
            "╭━━━〔 👑 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 〕━━━╮"
          );
          console.log("│");
          console.log("│  ╰─➤ WhatsApp Connected");
          console.log("│  ╰─➤ Queen MD Online");
          console.log("│");
          console.log(
            "╰━━━━━━━━━━━━━━━━━━━━╯"
          );
          console.log("");
        }


        if (connection === "close") {

          const statusCode =
            lastDisconnect?.error?.output?.statusCode;

          sessions.delete(phoneNumber);

          if (
            statusCode !==
            DisconnectReason.loggedOut
          ) {
            console.log(
              `🔄 Connection closed for ${phoneNumber}`
            );
          } else {
            console.log(
              `❌ ${phoneNumber} logged out`
            );
          }
        }
      }
    );


    // 🔑 PAIRING CODE

    if (!state.creds.registered) {

      const code =
        await sock.requestPairingCode(
          phoneNumber
        );

      console.log(
        `🔑 Pairing code generated for ${phoneNumber}: ${code}`
      );

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

    console.error(
      "❌ Pairing error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to generate pairing code.",
      error: error.message
    });
  }
});


// 🚀 START SERVER

app.listen(PORT, "0.0.0.0", () => {

  console.log("");

  console.log(
    "╭━━━〔 👑 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 〕━━━╮"
  );

  console.log("│");

  console.log(
    "│  ╰─➤ Pairing Server Started"
  );

  console.log(
    `│  ╰─➤ Port: ${PORT}`
  );

  console.log(
    "│  ╰─➤ Waiting for WhatsApp pairing"
  );

  console.log("│");

  console.log(
    "╰━━━━━━━━━━━━━━━━━━━━╯"
  );

  console.log("");
});
