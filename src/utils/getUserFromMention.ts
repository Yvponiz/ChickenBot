import { UserMention, MessageMentions, Client } from "discord.js";

export default function getUserFromMention(mention: UserMention) {
    const client = new Client({ intents: [] })
    
    if (!mention) return;

    // The id is the first and only match found by the RegEx.
    const matches = mention.matchAll(MessageMentions.USERS_PATTERN).next().value;

    // If supplied variable was not a mention, matches will be null instead of an array.
    if (!matches) return;

    // The first element in the matches array will be the entire mention, not just the ID,
    // so use index 1.
    const id = matches[1];

    return client.users.cache.get(id);
}


// Source: https://discordjs.guide/miscellaneous/parsing-mention-arguments.html#using-regular-expressions