// 👑 QUEEN MD — COMMAND SYSTEM
// All Queen MD commands will be stored here.

export const commandCategories = {

  general: {
    name: "☀️ GENERAL",
    commands: [
      ".menu",
      ".help",
      ".allmenu",
      ".list",
      ".commands",
      ".ping",
      ".alive",
      ".status",
      ".runtime",
      ".uptime",
      ".botinfo",
      ".info",
      ".about",
      ".owner",
      ".owners",
      ".creator",
      ".speed",
      ".cpu",
      ".ram",
      ".disk",
      ".server",
      ".host",
      ".version",
      ".features",
      ".stats",
      ".health",
      ".support",
      ".rules",
      ".terms",
      ".privacy"
    ]
  },

  owner: {
    name: "👑 OWNER",
    commands: [
      ".broadcast",
      ".bc",
      ".bcgroup",
      ".bcall",
      ".eval",
      ".exec",
      ".shell",
      ".restart",
      ".shutdown",
      ".reload",
      ".update",
      ".install",
      ".uninstall",
      ".addsudo",
      ".delsudo",
      ".listsudo",
      ".addowner",
      ".delowner",
      ".listowner",
      ".block",
      ".unblock",
      ".blocklist",
      ".join",
      ".leave",
      ".leaveall",
      ".setname",
      ".setbio",
      ".setpp",
      ".delpp",
      ".setstatus",
      ".maintenance"
    ]
  },

  group: {
    name: "👥 GROUP ADMIN",
    commands: [
      ".kick",
      ".add",
      ".promote",
      ".demote",
      ".ban",
      ".unban",
      ".mute",
      ".unmute",
      ".warn",
      ".unwarn",
      ".warnings",
      ".resetwarn",
      ".delete",
      ".del",
      ".purge",
      ".clear",
      ".tagall",
      ".hidetag",
      ".tagadmins",
      ".tag",
      ".mention",
      ".mentionall",
      ".groupinfo",
      ".members",
      ".admins",
      ".listadmins",
      ".getgroup",
      ".getinvite",
      ".link",
      ".revoke",
      ".approve",
      ".reject",
      ".open",
      ".close",
      ".setsubject",
      ".setdescription",
      ".setrules",
      ".setgroupicon",
      ".removeicon",
      ".resetgroup",
      ".groupstats",
      ".memberinfo"
    ]
  },

  security: {
    name: "🛡️ SECURITY",
    commands: [
      ".antilink",
      ".antispam",
      ".antiflood",
      ".antiraid",
      ".antibot",
      ".antidelete",
      ".antimention",
      ".antitag",
      ".antiinvite",
      ".anticall",
      ".antiswear",
      ".antinsult",
      ".antiscam",
      ".antiphishing",
      ".antinsfw",
      ".antiforward",
      ".antimedia",
      ".antigif",
      ".antisticker",
      ".security",
      ".antidomain",
      ".antichannel",
      ".antiporn",
      ".antidup",
      ".antiunknown",
      ".antivoice",
      ".antireport",
      ".securitylog",
      ".securityinfo",
      ".resetsecurity"
    ]
  },

  lock: {
    name: "🔒 LOCK SYSTEM",
    commands: [
      ".lock",
      ".unlock",
      ".locklink",
      ".unlocklink",
      ".lockmedia",
      ".unlockmedia",
      ".lockphoto",
      ".unlockphoto",
      ".lockvideo",
      ".unlockvideo",
      ".lockaudio",
      ".unlockaudio",
      ".lockdocument",
      ".unlockdocument",
      ".locksticker",
      ".unlocksticker",
      ".lockgif",
      ".unlockgif",
      ".lockcontact",
      ".unlockcontact",
      ".locklocation",
      ".unlocklocation",
      ".lockpoll",
      ".unlockpoll",
      ".lockreaction",
      ".unlockreaction",
      ".lockvoice",
      ".unlockvoice",
      ".lockall",
      ".unlockall"
    ]
  },

  welcome: {
    name: "👋 WELCOME",
    commands: [
      ".welcome",
      ".welcomeon",
      ".welcomeoff",
      ".setwelcome",
      ".getwelcome",
      ".resetwelcome",
      ".goodbye",
      ".goodbyeon",
      ".goodbyeoff",
      ".setgoodbye",
      ".getgoodbye",
      ".resetgoodbye",
      ".welcomeimage",
      ".goodbyeimage",
      ".welcometext",
      ".goodbyetext",
      ".welcomegif",
      ".goodbyegif",
      ".welcomevideo",
      ".goodbyevideo",
      ".welcometag",
      ".goodbyetag",
      ".welcomebutton",
      ".goodbyebutton",
      ".welcomeaudio",
      ".goodbyeaudio",
      ".welcomeadmin",
      ".goodbyeadmin",
      ".welcomechannel",
      ".resetgreet"
    ]
  },

  ai: {
    name: "🤖 AI",
    commands: [
      ".ai",
      ".ask",
      ".chat",
      ".chatbot",
      ".gpt",
      ".gemini",
      ".llama",
      ".deepseek",
      ".imagine",
      ".image",
      ".draw",
      ".generate",
      ".translate",
      ".detect",
      ".summarize",
      ".summary",
      ".rewrite",
      ".paraphrase",
      ".grammar",
      ".fixgrammar",
      ".explain",
      ".code",
      ".debug",
      ".review",
      ".optimize",
      ".essay",
      ".story",
      ".poem",
      ".question"
    ]
  },

  music: {
    name: "🎵 MUSIC",
    commands: [
      ".play",
      ".song",
      ".music",
      ".audio",
      ".mp3",
      ".ytmp3",
      ".ytaudio",
      ".ytsearch",
      ".searchsong",
      ".lyrics",
      ".lyric",
      ".album",
      ".artist",
      ".songinfo",
      ".musicinfo",
      ".spotify",
      ".spotifydl",
      ".soundcloud",
      ".soundclouddl",
      ".radio",
      ".playlist",
      ".queue",
      ".pause",
      ".resume",
      ".skip",
      ".stop",
      ".volume",
      ".next",
      ".previous"
    ]
  },

  download: {
    name: "📥 DOWNLOAD",
    commands: [
      ".video",
      ".ytmp4",
      ".ytvideo",
      ".youtube",
      ".youtubedl",
      ".tiktok",
      ".tiktokdl",
      ".tt",
      ".instagram",
      ".ig",
      ".igdl",
      ".facebook",
      ".fb",
      ".fbdl",
      ".twitter",
      ".x",
      ".xdl",
      ".threads",
      ".pinterest",
      ".pindl",
      ".reddit",
      ".redditdl",
      ".snapchat",
      ".snapdl",
      ".mediafire",
      ".gdrive",
      ".terabox",
      ".capcut",
      ".download",
      ".fetch"
    ]
  },

  sticker: {
    name: "🖼️ STICKER / IMAGE",
    commands: [
      ".sticker",
      ".s",
      ".stick",
      ".toimg",
      ".img",
      ".photo",
      ".webp",
      ".png",
      ".jpg",
      ".jpeg",
      ".crop",
      ".resize",
      ".rotate",
      ".flip",
      ".blur",
      ".sharpen",
      ".invert",
      ".grayscale",
      ".removebg",
      ".qr",
      ".qrcode",
      ".readqr",
      ".caption",
      ".meme",
      ".take",
      ".circle",
      ".round",
      ".frame",
      ".watermark"
    ]
  },

  games: {
    name: "🎮 GAMES",
    commands: [
      ".game",
      ".games",
      ".tictactoe",
      ".ttt",
      ".rps",
      ".rock",
      ".paper",
      ".scissors",
      ".hangman",
      ".guess",
      ".number",
      ".trivia",
      ".quiz",
      ".mathgame",
      ".wordgame",
      ".scramble",
      ".anagram",
      ".memory",
      ".blackjack",
      ".dice",
      ".roll",
      ".coin",
      ".coinflip",
      ".spin",
      ".slot",
      ".lottery",
      ".battle",
      ".duel",
      ".chess"
    ]
  },

  fun: {
    name: "😂 FUN",
    commands: [
      ".joke",
      ".jokes",
      ".meme",
      ".memegenerator",
      ".quote",
      ".quotes",
      ".truth",
      ".dare",
      ".truthordare",
      ".8ball",
      ".love",
      ".ship",
      ".compatibility",
      ".rizz",
      ".roast",
      ".compliment",
      ".insult",
      ".pickup",
      ".flirt",
      ".wyr",
      ".wouldyourather",
      ".emojimix",
      ".emojify",
      ".reverse",
      ".mock",
      ".fancy",
      ".howcute",
      ".howfunny",
      ".random"
    ]
  },

  economy: {
    name: "💰 ECONOMY",
    commands: [
      ".balance",
      ".bal",
      ".wallet",
      ".money",
      ".daily",
      ".weekly",
      ".monthly",
      ".work",
      ".job",
      ".crime",
      ".rob",
      ".gamble",
      ".bet",
      ".deposit",
      ".withdraw",
      ".pay",
      ".send",
      ".transfer",
      ".give",
      ".receive",
      ".claim",
      ".reward",
      ".bonus",
      ".cash",
      ".bank",
      ".transactions",
      ".history",
      ".rich",
      ".leaderboard"
    ]
  },

  level: {
    name: "⭐ LEVEL / XP",
    commands: [
      ".level",
      ".xp",
      ".rank",
      ".ranking",
      ".leaderboard",
      ".top",
      ".topusers",
      ".topchat",
      ".topxp",
      ".topmoney",
      ".profile",
      ".card",
      ".badges",
      ".badge",
      ".achievements",
      ".achievement",
      ".reputation",
      ".rep",
      ".givexp",
      ".addxp",
      ".removexp",
      ".resetxp",
      ".levelup",
      ".mylevel",
      ".rankcard",
      ".rankings",
      ".toprank",
      ".toprep",
      ".topactive"
    ]
  },

  user: {
    name: "👤 USER",
    commands: [
      ".register",
      ".unregister",
      ".verify",
      ".unverify",
      ".profile",
      ".me",
      ".myinfo",
      ".myid",
      ".id",
      ".whois",
      ".avatar",
      ".pp",
      ".getpp",
      ".setbio",
      ".getbio",
      ".setage",
      ".getage",
      ".setgender",
      ".getgender",
      ".setlocation",
      ".getlocation",
      ".afk",
      ".unafk",
      ".afklist",
      ".mystats",
      ".activity",
      ".mygroups",
      ".groups",
      ".groupcount"
    ]
  },

  search: {
    name: "🔎 SEARCH",
    commands: [
      ".google",
      ".search",
      ".youtube",
      ".ytsearch",
      ".wikipedia",
      ".wiki",
      ".image",
      ".images",
      ".news",
      ".weather",
      ".forecast",
      ".time",
      ".timezone",
      ".date",
      ".calendar",
      ".translate",
      ".dictionary",
      ".define",
      ".meaning",
      ".synonym",
      ".antonym",
      ".github",
      ".stackoverflow",
      ".reddit",
      ".imdb",
      ".movies",
      ".anime",
      ".manga",
      ".lyrics",
      ".map"
    ]
  },

  tools: {
    name: "🛠️ TOOLS",
    commands: [
      ".calculator",
      ".calc",
      ".unit",
      ".convert",
      ".currency",
      ".exchange",
      ".qr",
      ".qrcode",
      ".barcode",
      ".shorturl",
      ".urlshort",
      ".urlinfo",
      ".whois",
      ".ip",
      ".iplookup",
      ".dns",
      ".pingip",
      ".port",
      ".base64",
      ".encode",
      ".decode",
      ".md5",
      ".sha256",
      ".uuid",
      ".password",
      ".random",
      ".binary",
      ".hex",
      ".json",
      ".timestamp"
    ]
  },

  whatsapp: {
    name: "📱 WHATSAPP",
    commands: [
      ".vcf",
      ".contact",
      ".save",
      ".forward",
      ".copy",
      ".quote",
      ".quoted",
      ".reply",
      ".react",
      ".reaction",
      ".read",
      ".unread",
      ".viewonce",
      ".toviewonce",
      ".poll",
      ".createpoll",
      ".pollresult",
      ".status",
      ".statusdl",
      ".statussave",
      ".statusview",
      ".story",
      ".channel",
      ".channelinfo",
      ".channelpost",
      ".channelsearch",
      ".contactinfo",
      ".business",
      ".jid",
      ".jidinfo"
    ]
  },

  anime: {
    name: "🌸 ANIME",
    commands: [
      ".anime",
      ".animeinfo",
      ".animequote",
      ".animegirl",
      ".animeboy",
      ".neko",
      ".waifu",
      ".maid",
      ".husbando",
      ".kiss",
      ".hug",
      ".pat",
      ".slap",
      ".poke",
      ".bite",
      ".cuddle",
      ".wink",
      ".smile",
      ".wave",
      ".blush",
      ".cry",
      ".angry",
      ".dance",
      ".sad",
      ".happy",
      ".baka",
      ".senpai",
      ".kitsune",
      ".foxgirl",
      ".cosplay"
    ]
  },

  settings: {
    name: "⚙️ SETTINGS",
    commands: [
      ".settings",
      ".config",
      ".setprefix",
      ".getprefix",
      ".setlanguage",
      ".language",
      ".settimezone",
      ".timezone",
      ".setmode",
      ".public",
      ".private",
      ".self",
      ".groupmode",
      ".autoread",
      ".autotyping",
      ".autotyping",
      ".autoview",
      ".autoreply",
      ".autostatus",
      ".autodownload",
      ".autosticker",
      ".autoemoji",
      ".autowelcome",
      ".autogoodbye",
      ".autobot",
      ".autoforward",
      ".autotranslate",
      ".resetsettings"
    ]
  },

  premium: {
    name: "💎 PREMIUM",
    commands: [
      ".premium",
      ".premiuminfo",
      ".plans",
      ".plan",
      ".buy",
      ".subscribe",
      ".subscription",
      ".activate",
      ".deactivate",
      ".addpremium",
      ".delpremium",
      ".listpremium",
      ".premiumusers",
      ".premiumcheck",
      ".premiumfeatures",
      ".premiumprice",
      ".premiumdays",
      ".adddays",
      ".removedays",
      ".giftpremium",
      ".premiumgift",
      ".premiumcode",
      ".redeem",
      ".coupon",
      ".coupons",
      ".createcoupon",
      ".delcoupon",
      ".listcoupon",
      ".premiumstats"
    ]
  },

  stats: {
    name: "📊 STATS / LOGS",
    commands: [
      ".stats",
      ".botstats",
      ".groupstats",
      ".userstats",
      ".commandstats",
      ".cmdstats",
      ".usage",
      ".logs",
      ".log",
      ".errorlogs",
      ".activitylogs",
      ".userlogs",
      ".grouplogs",
      ".broadcaststats",
      ".database",
      ".dbstats",
      ".dbstatus",
      ".connections",
      ".sessions",
      ".session",
      ".devices",
      ".process",
      ".memory",
      ".storage",
      ".uptimestats",
      ".serverstats",
      ".traffic",
      ".requests"
    ]
  },

  automation: {
    name: "⚡ AUTOMATION",
    commands: [
      ".autoreply",
      ".autoresponder",
      ".addreply",
      ".delreply",
      ".listreply",
      ".setreply",
      ".autoreact",
      ".addreact",
      ".delreact",
      ".listreact",
      ".autogreet",
      ".autowarn",
      ".autoban",
      ".automute",
      ".autokick",
      ".autodelete",
      ".autopin",
      ".autounpin",
      ".autotag",
      ".autotranslate",
      ".autosave",
      ".autodownload",
      ".autostatus",
      ".autoforward",
      ".autofilter",
      ".autorespond",
      ".autolike",
      ".autoview",
      ".autoread",
      ".autojoin"
    ]
  },

  media: {
    name: "🎬 MEDIA",
    commands: [
      ".stickerize",
      ".toaudio",
      ".tovideo",
      ".tomp3",
      ".toogg",
      ".tomp4",
      ".gif",
      ".togif",
      ".gifmp4",
      ".videogif",
      ".compress",
      ".compressvideo",
      ".compressimage",
      ".compressaudio",
      ".mutevideo",
      ".trim",
      ".cut",
      ".merge",
      ".speedvideo",
      ".slowvideo",
      ".reversevideo",
      ".volumeup",
      ".volumedown",
      ".screenshot",
      ".thumbnail",
      ".extractaudio",
      ".extractimage",
      ".videotosticker",
      ".imagetosticker",
      ".audiosticker",
      ".textsticker"
    ]
  },

  extra: {
    name: "✨ EXTRA",
    commands: [
      ".report",
      ".reportuser",
      ".reportgroup",
      ".feedback",
      ".suggest",
      ".request",
      ".support",
      ".contact",
      ".faq",
      ".donate",
      ".sponsor",
      ".developer",
      ".source",
      ".repository",
      ".credits",
      ".thanks",
      ".invitebot",
      ".sharebot",
      ".addbot",
      ".botlink",
      ".pair",
      ".unpair",
      ".login",
      ".logout",
      ".sessioninfo",
      ".deviceinfo",
      ".checknumber",
      ".numberinfo",
      ".online",
      ".offline"
    ]
  }
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 👑 ALL COMMANDS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const allCommands = new Set(
  Object.values(commandCategories)
    .flatMap(category => category.commands)
);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📋 MAIN MENU
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function getMainMenu() {

  let menu = `
╭━━━〔 👑 QUEEN MD 〕━━━╮
┃
┃  🤖 QUEEN MD WHATSAPP BOT
┃  ⚡ 500+ COMMANDS
┃
┣━━〔 ⚡ QUICK MENU 〕━━
┃
┃ 👑 .owner
┃ ⚡ .ping
┃ 🤖 .ai
┃ 🎵 .play
┃ 🎬 .video
┃ 🖼️ .sticker
┃ 👥 .group
┃ 🛡️ .security
┃ 🎮 .games
┃ 💰 .economy
┃ 💎 .premium
┃
┣━━〔 📚 CATEGORIES 〕━━
┃
`;

  for (const [key, category] of Object.entries(commandCategories)) {
    menu += `┃ ${category.name} → .${key}\n`;
  }

  menu += `
┣━━━━━━━━━━━━━━━━━━━━
┃
┃ 👑 QUEEN MD
┃ • 500+ CMD
┃ • WhatsApp Bot
┃ • Powered by Baileys
┃
╰━━━━━━━━━━━━━━━━━━━━╯
`;

  return menu;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📚 CATEGORY MENU
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function getCategoryMenu(categoryName) {

  const category = commandCategories[categoryName];

  if (!category) {
    return null;
  }

  let text = `
╭━━〔 ${category.name} 〕━━╮
┃
`;

  for (const command of category.commands) {
    text += `┃ ▢ ${command}\n`;
  }

  text += `
╰━━━━━━━━━━━━━━━━━━━━╯
👑 QUEEN MD
`;

  return text;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔎 CHECK COMMAND
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function commandExists(command) {
  return allCommands.has(command.toLowerCase());
}
