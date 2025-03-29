const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiCanvas } = require("aoi.canvas");
const dotenv = require("dotenv");
dotenv.config();

const client = new AoiClient({
  token: process.env.TOKEN_BOT,
  prefix: "$getGuildVar[prefix;$guildID]",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "2a28a349ba545346742dafd6881a8a01",
  }
});

const canvas = new AoiCanvas(client);

require("./handlers/variaveis.js")(client);

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");