import fs from 'node:fs';
import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));
const pathify = (dir: string[]) => dir.splice(0, dir.length).join('/');

export const getFolders = (dir: string[]) => {
	const directory = path.join(__dirname, pathify(dir));
	const folders = fs.readdirSync(directory);
	return folders;
};

export const getFiles = (dir: string[]) => {
	const directory = path.join(__dirname, pathify(dir));
	const files = fs.readdirSync(directory).filter(file => file.endsWith('.ts'));
	return files;
};

export const fetchCommands = async () => {
	const commands = [];
	const subfolders = getFolders(['..', 'commands']);

	for (const folder of subfolders) {
		// Array of all files in a subfolder
		const files = getFiles(['..', 'commands', folder]);

		// Loop through each file of the files array
		for (const file of files) {
			try {
				const module = await import(`../commands/${folder}/${file}`);
				// Remove extension
				const fileName = file.split('.')[0];
				const command = module[fileName];
				
				commands.push(command);
			} catch (error) {
				console.error(`[❌] Error: ${error}`);
			}
		}
	}
	return commands;
}
