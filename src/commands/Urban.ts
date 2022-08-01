import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import fetch from "node-fetch";

export const Urban: Command = {
    name: "urban",
    description: "Search words on the Urban Dictionary",
    type: "CHAT_INPUT",
    options: [
        {
            name: "word",
            description: "Word you want to search on the Urban Dictionary",
            type: "STRING",
            required: true
        }
    ],

    run: async (client: Client, interaction: BaseCommandInteraction) => {
        let search = interaction.options.get("word");
        const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${search?.value}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f8a4e24618msha2d77e44c0b122dp1465a5jsn4611966da554',
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        };

        async function urban() {
            return fetch(url, options)
                .then(res => res.json())
                .then((data) => {
                    console.log(JSON.stringify(data.list[0]))
                    return `**Definition**": ${data.list[0].definition}\n**Exemple**": ${data.list[0].example}`
                    
                })
                .catch(err => console.error('error:' + err));
        }
        urban()
        console.log("SEARCH", search?.value)
        const content = `${await urban()}`;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    },
};
