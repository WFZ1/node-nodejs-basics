import { readdir } from 'node:fs/promises';
import { throwError } from '../utils/throwError.js';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files']);

const list = async () => {
    const files = await readdir(src).catch(() => throwError());
    console.log(files);
};

await list();
