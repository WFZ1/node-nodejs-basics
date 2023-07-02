import { writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files', 'fresh.txt');

const checkFileExists = async (filePath) => Boolean(await stat(filePath).catch(() => false));

const create = async () => {
    const isFileExists = await checkFileExists(src);

    if (isFileExists) {
        throw Error('FS operation failed');
    }

    await writeFile(src, 'I am fresh and young');
};

await create();
