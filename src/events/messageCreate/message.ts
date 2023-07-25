import type { Client, Message } from 'discord.js'

export const message = async (_client: Client, message: Message) => {
  const user = message.author;
  const content = message.content;

  if (user.bot) return;
  
  console.log(`${user.tag}: ${content}`);
  
}