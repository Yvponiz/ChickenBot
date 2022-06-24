import { Client, Guild, Message } from "discord.js";
import { NORTHKINGS_CHANNELS, NORTHKINGS_SERVER_ID } from "../../NorthKingsOptions";

export default (client: Client, server: Guild): void => {

    client.on("messageReactionAdd", async (reaction, user) => {
        const positionsChannel = reaction.message
        const consolesChannel = reaction.message.channel;
        const message = reaction.message;


        // When a reaction is received, check if the structure is partial
        if (reaction.partial) {
            // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
            try {
                await reaction.fetch();
                const users = await reaction.users.fetch();
                console.log(await reaction.users.fetch());

                for (let i = 0; i < reaction.count!; i++){
                    console.log(users.at(i)?.username);
                }

            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }

    });
}; 