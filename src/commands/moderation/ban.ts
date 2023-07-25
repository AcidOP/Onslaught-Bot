import { SlashCommandBuilder } from 'discord.js';
import type { Client, CommandInteraction } from 'discord.js';

export const ban = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a naughty user')
		.addUserOption(option => {
			return option
				.setName('target')
				.setDescription('The user to ban')
				.setRequired(true);
		})
		.addStringOption(option => {
			return option
				.setName('reason')
				.setDescription('The reason for the ban')
				.setRequired(false);
		})
		,
	async execute(_client: Client, interaction: CommandInteraction) {
		await interaction.reply('Ban!');
	},
};
