const { TOKEN } = require('./config.json');
const { registerCommands } = require('./utils/registerCommands');
const { Client, GatewayIntentBits } = require('discord.js');

const intents = [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages];
const client = new Client({ intents: intents });

client.on('ready', () => {
	console.log('Bot is ready!');
});

registerCommands();

client.login(TOKEN);
