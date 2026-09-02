# config.py

import os
from dotenv import load_dotenv

load_dotenv()

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
OWNER_ID = os.getenv("OWNER_ID")

BOT_NAME = "QUEEN MD"
PREFIX = "."
