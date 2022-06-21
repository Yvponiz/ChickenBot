import { Client, Guild} from "discord.js";

export default (client: Client): void => {
    
    client.on("guildMemberAdd", async (member) => {
        if (!member) {
            return;
        }
        const channel = member.guild.systemChannel;
        channel?.send(`Welcome ${member.user.username} :chicken:`);
    });

    client.on("guildMemberRemove", async (member) => {
        if (!member) {
            return;
        }
        console.log(member.guild.systemChannel);
        console.log(`Casses toi! ${member.user.username}`);
    })
}; 