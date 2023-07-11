import { readFile } from 'node:fs/promises';
import { throwError } from '../utils/throwError.js';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files', 'fileToRead.txt']);

const read = async () => {
    const content = await readFile(src, { encoding: 'utf8' }).catch(() => throwError());
    console.log(content);
};

await read();
