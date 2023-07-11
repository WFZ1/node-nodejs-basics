import { createWriteStream } from 'node:fs';
import { getFilePath } from '../utils/getFilePath.js';

const dest = getFilePath(import.meta.url, ['files', 'fileToWrite.txt']);

const write = async () => {
    const writableStream = createWriteStream(dest);
    process.stdin.pipe(writableStream);
};

await write();
