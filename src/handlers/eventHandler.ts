import { getFolders, getFiles } from "../helpers/directory.js";
import type { Client } from "discord.js";

export const handleEvents = async (client: Client) => {

  const folders = getFolders(['..', 'events']);

  for (const folder of folders) {
    const files = getFiles(['..', 'events', folder]);
    
    client.on(folder, async (args) => {
      for (const file of files) {
        const module = await import(`../events/${folder}/${file}`);

        if (!module) {
          new Error(`Module ${file} not found`);
        }

        const fileName = file.split('.')[0];
        const event = module[fileName];


        await event(client, args);
      }
    })
  }
}
