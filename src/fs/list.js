import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { throwError } from './utils/throwError.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files');

const list = async () => {
    const files = await readdir(src).catch(() => throwError());
    console.log(files);
};

await list();
