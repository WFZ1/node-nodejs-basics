import { rm } from 'node:fs/promises';
import { throwError } from '../utils/throwError.js';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files', 'fileToRemove.txt']);

const remove = async () => {
    await rm(src).catch(() => throwError());
};

await remove();
