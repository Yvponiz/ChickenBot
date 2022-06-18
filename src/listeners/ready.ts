import { Client } from "discord.js";
import GreetNewUser from "../commands/GreetNewUser";
import {Commands } from "../Commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);
        GreetNewUser(client);

        console.log(`${client.user.username} is online`);
    });
}; 