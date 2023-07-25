var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'node:fs';
import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
export const __dirname = dirname(fileURLToPath(import.meta.url));
export const getFolders = (dir) => {
    const folders = fs.readdirSync(dir);
    return folders;
};
export const getFiles = (dir) => {
    const files = fs.readdirSync(dir).filter(file => file.endsWith('.ts'));
    return files;
};
export const getFilesRecursive = (dir) => {
    const folders = getFolders(dir);
    const files = folders.map(folder => getFiles(path.join(dir, folder))).flat();
    return files;
};
export const fetchCommands = () => __awaiter(void 0, void 0, void 0, function* () {
    const subfolders = getFolders(path.join(__dirname, '..', 'commands'));
    const commands = [];
    for (const folder of subfolders) {
        const files = getFiles(path.join(__dirname, '..', 'commands', folder));
        for (const file of files) {
            try {
                const module = yield import(`../commands/${folder}/${file}`);
                const fileName = file.split('.')[0];
                const command = module[fileName].data.toJSON();
                commands.push(command);
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    return commands;
});
