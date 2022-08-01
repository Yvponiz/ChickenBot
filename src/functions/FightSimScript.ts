import { BaseCommandInteraction, TextChannel, User } from "discord.js";

export async function cockFightingScript (interaction: BaseCommandInteraction, channel: TextChannel, winner: User){
    const wait = require('node:timers/promises').setTimeout;
    await wait(2000);
    await channel!.send("_Simulating fight..._");
    await wait(2000);
    await channel!.send("...");
    await wait(1000);
    channel?.send(`**And the winner is... ${winner}!!! :tada:**`)
}