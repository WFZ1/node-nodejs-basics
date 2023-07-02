import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { checkFileExists } from './utils/checkFileExists.js';
import { throwError } from './utils/throwError.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files', 'fresh.txt');

const create = async () => {
    const isFileExists = await checkFileExists(src);

    if (isFileExists) {
        throwError();
    }

    await writeFile(src, 'I am fresh and young');
};

await create();
