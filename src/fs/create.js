import { writeFile } from 'node:fs/promises';
import { throwError } from '../utils/throwError.js';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files', 'fresh.txt']);

const create = async () => {
    await writeFile(src, 'I am fresh and young', { flag: 'wx' }).catch(() => throwError());
};

await create();
