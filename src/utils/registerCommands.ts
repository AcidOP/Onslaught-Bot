import { REST, Routes } from 'discord.js';
import { CLIENT_ID, TOKEN } from '../config.js';
import { fetchCommands } from '../helpers/directory.js';


export const registerCommands = async () => {

	const commands = await fetchCommands();

	const rest = new REST({ version: '10' }).setToken(TOKEN);
	await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

	console.log('✅ Commands Loaded');
};
