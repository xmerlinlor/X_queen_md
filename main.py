# main.py

import asyncio
from telegram.pairing import start_telegram
from whatsapp.connection import start_whatsapp


async def main():
    print("""
╔════════════════════════════════════╗
║          👑 QUEEN MD BOT           ║
║                                    ║
║   🐍 Python WhatsApp Bot           ║
║   📱 Telegram = Pairing Only       ║
║   🚂 Railway = Hosting             ║
║   🐙 GitHub = Source Code          ║
╚════════════════════════════════════╝
""")

    # Start Telegram pairing system
    telegram_task = asyncio.create_task(
        start_telegram()
    )

    # Start WhatsApp connection
    whatsapp_task = asyncio.create_task(
        start_whatsapp()
    )

    await asyncio.gather(
        telegram_task,
        whatsapp_task
    )


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n🛑 Queen MD stopped.")
