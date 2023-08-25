import { Client } from "discord.js";
import * as NorthKingsConfig from "../../configs/NorthKingsConfig";
import * as S21Config from "../../configs/S21Config"
import * as QcpfConfig from "../../configs/QcpfConfig"
import { northKingsRoles, S21sRoles, qcfpRoles } from "../../functions/AddRemoveRoles";

export default (client: Client): void => {
    client.on("messageReactionAdd", async (reaction, user) => {
        const guildId = reaction.message.guildId;
        if (guildId == NorthKingsConfig.SERVER.ID || guildId == S21Config.SERVER.ID || QcpfConfig.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = await reaction.message.guild!.members.fetch(user.id);

            if (guildId == NorthKingsConfig.SERVER.ID)
                northKingsRoles[emojis ?? '']?.add(member);
            if (guildId == S21Config.SERVER.ID)
                S21sRoles[emojis ?? ''].add(member);
            if (guildId == QcpfConfig.SERVER.ID)
                qcfpRoles[emojis ?? ''].add(member);
            if(guildId == "606713220606066710")
                return;

        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        const guildId = reaction.message.guildId;
        if (guildId == NorthKingsConfig.SERVER.ID || guildId == S21Config.SERVER.ID || QcpfConfig.SERVER.ID) {
            if (!reaction) {
                return;
            }
            await reaction.fetch();
            const emojis = await reaction.emoji.name;
            const member = await reaction.message.guild!.members.fetch(user.id);

            if (guildId == NorthKingsConfig.SERVER.ID)
                northKingsRoles[emojis ?? '']?.remove(member);
            if (guildId == S21Config.SERVER.ID)
                S21sRoles[emojis ?? ''].remove(member);
            if (guildId == QcpfConfig.SERVER.ID)
                qcfpRoles[emojis ?? ''].remove(member);
        }
    });
}; 