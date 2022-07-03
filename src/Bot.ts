import * as dotenv from "dotenv";
import { Client, Intents, Permissions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config(); // ASK DAMON ABOUT __dirname

(async () => {
    console.log("Bot is starting...");
    
    const bot = new Client({
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_MEMBERS,
        ],
        partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    });

    ready(bot);
    interactionCreate(bot);

    await bot.login(process.env.BOT_TOKEN);

})();

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req: NextApiRequest, res:NextApiResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Oui, Merci Laurent!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
