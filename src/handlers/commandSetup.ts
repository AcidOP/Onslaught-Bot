import { Collection } from "discord.js";
import type { Client } from "discord.js";
import { fetchCommands } from "../helpers/directory.js";

declare module 'discord.js' {
  interface Client {
    commands: Collection<any, any>;
  }
}

export const setupCommands = async (client: Client) => {
  client.commands = new Collection();
  const commands = await fetchCommands();

  for (const command of commands) {
    client.commands.set(command.data.name, command);
    console.log(`[✅] Loaded command ${command.data.name}`);
  }
}