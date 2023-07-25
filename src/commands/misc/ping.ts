import { SlashCommandBuilder } from 'discord.js';
import type { Client, CommandInteraction } from 'discord.js';

export const ping = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping any selected role')
		.addRoleOption(option => {
			return option
				.setName('role')
				.setDescription('Select a role to ping')
				.setRequired(true);
		}),
	async execute(_client: Client, interaction: CommandInteraction) {
		await interaction.reply({ content: 'Pong!' });
	},
};
