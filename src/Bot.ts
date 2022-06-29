import * as dotenv from "dotenv";
import { Client, Intents, Permissions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

dotenv.config({ path: 'C:/Users/PC/Desktop/Projects/Web/ChickenBot/.env' }); // ASK DAMON ABOUT __dirname

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
