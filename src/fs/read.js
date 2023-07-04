import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { throwError } from '../utils/throwError.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const content = await readFile(src, { encoding: 'utf8' }).catch(() => throwError());
    console.log(content);
};

await read();
