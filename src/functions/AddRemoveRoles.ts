import { GuildMember } from "discord.js";
import * as NorthKingsConfig from "../configs/NorthKingsConfig";
import * as S21Config from "../configs/S21Config"

interface Role {
  add(member: GuildMember): Promise<void>;
  remove(member: GuildMember): Promise<void>;
}

export const northKingsroles: Record<string, Role> = {
    "🟢": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.LW.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.LW.ID)}
    },
    "🔴": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.C.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.C.ID)}
    },
    "🔵": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.RW.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.RW.ID)}
    },
    "🥷": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.LD.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.LD.ID)}
    },
    "🟡": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.RD.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.RD.ID)}
    },
    "🟣": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.G.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.G.ID)}
    },
    "GAMERS": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.POSITIONS.GAMERS.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.POSITIONS.GAMERS.ID)}
    },
    "xbox": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.CONSOLE.XBOX.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.CONSOLE.XBOX.ID)}
    },
    "psn": {
        add: async (member: GuildMember)=> {(await member).roles.add(NorthKingsConfig.ROLES.CONSOLE.PSN.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(NorthKingsConfig.ROLES.CONSOLE.PSN.ID)}
    },
}

export const S21sroles: Record<string, Role> = {
    "🟢": {
        add: async (member: GuildMember)=> {(await member).roles.add(S21Config.ROLES.POSITIONS.LW.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(S21Config.ROLES.POSITIONS.LW.ID)}
    },
    "🔴": {
        add: async (member: GuildMember)=> {(await member).roles.add(S21Config.ROLES.POSITIONS.C.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(S21Config.ROLES.POSITIONS.C.ID)}
    },
    "🔵": {
        add: async (member: GuildMember)=> {(await member).roles.add(S21Config.ROLES.POSITIONS.RW.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(S21Config.ROLES.POSITIONS.RW.ID)}
    },
    "🥷": {
        add: async (member: GuildMember)=> {(await member).roles.add(S21Config.ROLES.POSITIONS.LD.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(S21Config.ROLES.POSITIONS.LD.ID)}
    },
    "🟡": {
        add: async (member: GuildMember)=> {(await member).roles.add(S21Config.ROLES.POSITIONS.RD.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(S21Config.ROLES.POSITIONS.RD.ID)}
    },
    "🟣": {
        add: async (member: GuildMember)=> {(await member).roles.add(S21Config.ROLES.POSITIONS.G.ID)},
        remove: async (member: GuildMember)=> {(await member).roles.remove(S21Config.ROLES.POSITIONS.G.ID)}
    }
}