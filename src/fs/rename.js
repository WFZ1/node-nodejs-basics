import fs from 'node:fs/promises';
import { checkFileExists } from '../utils/checkFileExists.js';
import { throwError } from '../utils/throwError.js';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files', 'wrongFilename.txt']);
const newSrc = getFilePath(import.meta.url, ['files', 'properFilename.md']);

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
