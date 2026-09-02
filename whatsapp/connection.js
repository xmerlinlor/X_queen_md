import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason
} from "@whiskeysockets/baileys";

import P from "pino";
import { handleCommand } from "../commands/handler.js";

export async function startWhatsApp() {
  const { state, saveCreds } =
    await useMultiFileAuthState("./auth");

  const sock = makeWASocket({
    auth: state,
    logger: P({ level: "silent" }),
    printQRInTerminal: false
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "open") {
      console.log("👑 QUEEN MD — WhatsApp Connected");
      console.log("╰─➤ Bot is Online");
    }

    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !==
        DisconnectReason.loggedOut;

      if (shouldReconnect) {
        console.log("🔄 Reconnecting Queen MD...");
        startWhatsApp();
      } else {
        console.log("❌ WhatsApp Logged Out");
      }
    }
  });

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const message = messages[0];

    if (!message?.message) return;

    await handleCommand(sock, message);
  });

  return sock;
        }
