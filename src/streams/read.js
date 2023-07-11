import { createReadStream } from 'node:fs';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files', 'fileToRead.txt']);

const read = async () => {
    const readableStream = createReadStream(src);

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();
