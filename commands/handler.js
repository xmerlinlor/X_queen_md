// 👑 QUEEN MD COMMAND HANDLER

export async function handleCommand(sock, message) {
  try {
    const text =
      message.message?.conversation ||
      message.message?.extendedTextMessage?.text ||
      "";

    if (!text.startsWith(".")) return;

    const command = text
      .trim()
      .split(/\s+/)[0]
      .toLowerCase();

    if (command === ".menu") {
      await sock.sendMessage(message.key.remoteJid, {
        text: "👑 QUEEN MD MENU\n\nYour menu will be connected here."
      });
    }

  } catch (error) {
    console.error("❌ Command Handler Error:", error);
  }
}
