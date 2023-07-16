const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');
const { TOKEN, CLIENT_ID } = require('../config.json');

const commands = [];
const commandDir = path.join(__dirname, '..', 'commands');
// Get all the sub categories in the commands directory
const folders = fs.readdirSync(commandDir);
// Recursively get all the files in the sub categories
const commandFiles = folders.map(folder => fs.readdirSync(path.join(commandDir, folder)).filter(file => file.endsWith('.js'))).flat();

// Populate `commands` with the data from each file
for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(TOKEN);

// Register the commands
const registerCommands = async () => {
	console.log('Started refreshing application (/) commands.');

	await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

	console.log('Successfully reloaded application (/) commands.');
};

module.exports = { registerCommands };
