import { Client, GatewayIntentBits } from 'discord.js';
import { handleEvents } from './handlers/eventHandler.js';
import { TOKEN } from './config.js';
import { setupCommands } from './handlers/commandSetup.js';

const intents = [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMessageReactions,
];

const client = new Client({ intents: intents });

handleEvents(client);
setupCommands(client);

client.login(TOKEN);
