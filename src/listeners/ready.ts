import { Client } from "discord.js";
import * as NorthKingsConfig from "../configs/NorthKingsConfig";
import {Commands } from "../Commands";
import GreetNewUser from "../commands/GreetNewUser";
import AssignRoles from "../commands/NorthKings/AssignRoles";

export default (client: Client): void => {
    const server =  client.guilds.fetch(NorthKingsConfig.SERVER.ID);
    
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);
        
        GreetNewUser(client);
        AssignRoles(client, await server);

        console.log(`${client.user.username} is online`);
    });
}; 