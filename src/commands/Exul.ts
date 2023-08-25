import { Client, MessageEmbed} from "discord.js";

const targetUserId = '764260003531587584'; // Replace with the actual user's ID
const response: string[] = [
    "Shut yo ass up!",
    "Dude ta yeule",
    "Ta yeule Exul",
    "Man, y'arrête jamais ce gars",
    "Caliss",
    "Ok man, t'es cancel"
]

export default (client: Client): void => {
    
    client.on('messageCreate', (message) => {
        const responseMessage = response[Math.floor(Math.random() * response.length)];
        // Check if the message is from the target user
        if (message.author.id === targetUserId) {
            message.reply(responseMessage);
        }
    });
}; 