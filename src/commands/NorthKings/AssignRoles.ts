import { Client, Guild, Message } from "discord.js";
import * as NorthKingsConfig from "../../configs/NorthKingsConfig";

export default (client: Client, server: Guild): void => {
    client.on("messageReactionAdd", async (reaction, user) => {
        if(reaction.message.guild?.name === NorthKingsConfig.SERVER.NAME){
            if (!reaction){
                return;
            }
            await reaction.fetch();
            const users = await reaction.users.fetch();
    
            for (let i = 0; i < reaction.count!; i++){
                console.log(`${users.at(i)?.username}`);
            }
            console.log("------------\n")
    
            const emojis = await reaction.emoji.name
            console.log(emojis)
        }
    });
}; 