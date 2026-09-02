// 👑 QUEEN MD COMMAND HANDLER

import {
  getMainMenu,
  getCategoryMenu,
  commandExists
} from "./commands.js";

export async function handleCommand(sock, message) {
  try {
    const text =
      message.message?.conversation ||
      message.message?.extendedTextMessage?.text ||
      "";

    if (!text.startsWith(".")) return;

    const args = text.trim().split(/\s+/);
    const command = args[0].toLowerCase().split("@")[0];

    const jid = message.key.remoteJid;

    // 📋 MAIN MENU
    if (command === ".menu") {
      await sock.sendMessage(jid, {
        text: getMainMenu()
      });
      return;
    }

    // 📚 CATEGORY MENU
    if (command.startsWith(".") && args.length === 1) {
      const category = command.slice(1);

      const categoryMenu = getCategoryMenu(category);

      if (categoryMenu) {
        await sock.sendMessage(jid, {
          text: categoryMenu
        });
        return;
      }
    }

    // 🔎 CHECK COMMAND
    if (commandExists(command)) {
      await sock.sendMessage(jid, {
        text:
          `👑 *QUEEN MD*\n\n` +
          `╰─➤ *${command}*\n\n` +
          `⚡ Command recognized.\n` +
          `🚧 Feature handler will be added next.`
      });
    }

  } catch (error) {
    console.error("❌ Queen MD Handler Error:", error);
  }
}
