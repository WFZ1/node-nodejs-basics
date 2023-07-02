import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { checkFileExists } from './utils/checkFileExists.js';
import { throwError } from './utils/throwError.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const newSrc = path.resolve(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    const isFileExists = await checkFileExists(newSrc);

    if (isFileExists) {
        throwError();
    }

    await fs.rename(src, newSrc).catch(() => {
        throwError();
    });
};

await rename();
