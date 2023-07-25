// import { registerCommands } from '../../utils/registerCommands.js';
import type { Client } from 'discord.js'

export const start = (client: Client) => {
  // registerCommands();
  console.log(`✅ Logged in as ${client.user?.tag}!`)
}
