var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { REST, Routes } from 'discord.js';
import { CLIENT_ID, TOKEN } from '../config.js';
import { fetchCommands } from '../helpers/directory.js';
export const registerCommands = () => __awaiter(void 0, void 0, void 0, function* () {
    const commands = yield fetchCommands();
    const rest = new REST({ version: '10' }).setToken(TOKEN);
    yield rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
});
