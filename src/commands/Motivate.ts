import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import fetch from "node-fetch";

const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f8a4e24618msha2d77e44c0b122dp1465a5jsn4611966da554',
        'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
};

async function quote() {
    return fetch(url, options)
        .then(res => res.json())
        .then((data) => {
            console.log(JSON.stringify(data))
            return data.text
        })
        .catch(err => console.error('error:' + err));
}

export const Motivate: Command = {
    name: "motivate",
    description: "Motivational quote of the day",
    type: "CHAT_INPUT",

    run: async (client: Client, interaction: BaseCommandInteraction) => {

        const content: string = `_${await quote()}_`;
        await interaction.followUp({
            ephemeral: true,
            content
        });
    },
};
