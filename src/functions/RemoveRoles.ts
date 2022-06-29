import { GuildMember } from "discord.js";
import * as NorthKingsConfig from "../configs/NorthKingsConfig";

export async function removeRoles(member: GuildMember, emojis: string) {
    if ((await member).moderatable) {
        switch (emojis) {
            case NorthKingsConfig.ROLES.CONSOLE.PSN.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.CONSOLE.PSN.ID);
                break;
            }
            case NorthKingsConfig.ROLES.CONSOLE.XBOX.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.CONSOLE.XBOX.ID);
                break;
            }
            case NorthKingsConfig.ROLES.POSITIONS.C.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.C.ID);
                break;
            }
            case NorthKingsConfig.ROLES.POSITIONS.G.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.G.ID);
                break;
            }
            case NorthKingsConfig.ROLES.POSITIONS.LD.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.LD.ID);
                break;
            }
            case NorthKingsConfig.ROLES.POSITIONS.LW.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.LW.ID);
                break;
            }
            case NorthKingsConfig.ROLES.POSITIONS.RD.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.RD.ID);
                break;
            }
            case NorthKingsConfig.ROLES.POSITIONS.RW.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.RW.ID);
                break;
            }
            case NorthKingsConfig.ROLES.POSITIONS.GAMERS.EMOJI: {
                (await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.GAMERS.ID);
                break;
            }
        }
    }
}

// export const roles = {
//     "🟢": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.LW.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.LW.ID)}
//     },
//     "🔴": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.C.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.C.ID)}
//     },
//     "🔵": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.RW.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.RW.ID)}
//     },
//     "🥷": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.LD.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.LD.ID)}
//     },
//     "🟡": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.RD.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.RD.ID)}
//     },
//     "🟣": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.G.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.G.ID)}
//     },
//     "GAMERS": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.GAMERS.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.GAMERS.ID)}
//     },
//     "xbox": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.CONSOLE.XBOX.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.CONSOLE.XBOX.ID)}
//     },
//     "psn": {
//         add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.CONSOLE.PSN.ID)},
//         remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.CONSOLE.PSN.ID)}
//     },
// }