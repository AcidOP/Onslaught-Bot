import type { Client, Interaction } from "discord.js";

export const command = async (client: Client, interaction: Interaction) => {

  // Stop if the interaction is not a command
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  // Stop if the command doesn't exist
  if (!command) return;

  console.log(command)

  try {
    // Execute the command
    await command.execute(client, interaction);

  } catch (error) {
    console.error(`[❌] Error while executing command by ${command.name}: ${error}`);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });

  }
}
