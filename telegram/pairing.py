# telegram/pairing.py

import os
from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
)

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")


async def start_command(
    update: Update,
    context: ContextTypes.DEFAULT_TYPE
):
    await update.message.reply_text(
        "👑 *QUEEN MD*\n\n"
        "📱 WhatsApp Pairing System\n\n"
        "Use:\n"
        "`/pair 2348012345678`\n\n"
        "Example:\n"
        "`/pair 2348012345678`",
        parse_mode="Markdown"
    )


async def pair_command(
    update: Update,
    context: ContextTypes.DEFAULT_TYPE
):
    if not context.args:
        await update.message.reply_text(
            "❌ Please provide your WhatsApp number.\n\n"
            "Example:\n"
            "`/pair 2348012345678`",
            parse_mode="Markdown"
        )
        return

    number = "".join(
        character for character in context.args[0]
        if character.isdigit()
    )

    if len(number) < 10:
        await update.message.reply_text(
            "❌ Invalid WhatsApp number."
        )
        return

    await update.message.reply_text(
        f"📱 WhatsApp number received:\n"
        f"`{number}`\n\n"
        "⏳ Preparing pairing request...",
        parse_mode="Markdown"
    )

    # The real WhatsApp pairing request
    # will be connected here in the next file.


async def start_telegram():
    if not TELEGRAM_BOT_TOKEN:
        raise RuntimeError(
            "TELEGRAM_BOT_TOKEN is missing."
        )

    application = (
        Application.builder()
        .token(TELEGRAM_BOT_TOKEN)
        .build()
    )

    application.add_handler(
        CommandHandler("start", start_command)
    )

    application.add_handler(
        CommandHandler("pair", pair_command)
    )

    print("✅ Telegram pairing bot started.")

    await application.initialize()
    await application.start()
    await application.updater.start_polling()

    # Keep Telegram running
    await asyncio.Event().wait()
