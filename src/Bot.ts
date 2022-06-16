import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

const token = "OTg3MDcwMTM4NzE1MDc4NjY2.GnhEy0.5agxSrk-KyHR1dHgJk5dX_rnT63Gt1IfKlM4hE" //generate new asap

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);
