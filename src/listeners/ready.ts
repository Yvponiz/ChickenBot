import { Client } from "discord.js";
import { NORTHKINGS_SERVER_ID } from "../NorthKingsOptions";
import {Commands } from "../Commands";
import GreetNewUser from "../commands/GreetNewUser";
import AssignRoles from "../commands/NorthKings/AssignRoles";

export default (client: Client): void => {
    const server =  client.guilds.fetch(NORTHKINGS_SERVER_ID);
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);
        
        GreetNewUser(client);
        if(server){
            AssignRoles(client, await server);
        }

        console.log(`${client.user.username} is online`);
    });
}; 