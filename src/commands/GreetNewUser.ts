import { BaseCommandInteraction, Client, Guild } from "discord.js";

export default (client: Client): void => {
    
    client.on("guildMemberAdd", async (member) => {
        if (!member) {
            return;
        }
        
        client.on("messageCreate", async (message) => {
            message.channel.send(`Welcome ${member.user.username}`)
        })
        console.log(`Welcome ${member.user.username}`);
        
    });

    client.on("guildMemberRemove", async (member) => {
        if (!member) {
            return;
        }

        console.log(`Casses toi! ${member.user.username}`);
    })
}; 