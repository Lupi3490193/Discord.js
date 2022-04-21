const Discord = require("discord.js");
const client = new Discord.Client({ intents: 7753 }); //Itents:https://ziad87.net/intents/
const fs = require("fs");
const config = require("./config.json");
client.config = config;

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handler")(client);
client.login(process.env.token); //Variable de entorno(candado)
