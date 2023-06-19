import { Client, MessageEmbed} from "discord.js";

export default (client: Client): void => {
    
    client.on("guildMemberAdd", async (member) => {
        if (!member) {
            return;
        }
        const user = member;
        const image = (await user).displayAvatarURL();
  
        const embed = new MessageEmbed()
            .setColor("DARK_AQUA")
            .setTitle("New Chick Alert!")
            .setDescription(`Welcome ${user}!`)
            .setImage(image)

        const channel = member.guild.systemChannel;

        channel?.send({
            embeds: [embed]
        })
    });
}; 