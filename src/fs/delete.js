import { rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { throwError } from '../utils/throwError.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    await rm(src).catch(() => throwError());
};

await remove();
