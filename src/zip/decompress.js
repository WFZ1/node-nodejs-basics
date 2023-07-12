import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'stream/promises';
import { getFilePath } from '../utils/getFilePath.js';
import { createGunzip } from 'node:zlib';

const src = getFilePath(import.meta.url, ['files', 'archive.gz']);
const dest = getFilePath(import.meta.url, ['files', 'fileToCompress.txt']);

const decompress = async () => {
    const unzip = createGunzip();

    const readableStream = createReadStream(src);
    const writableStream = createWriteStream(dest);

    pipeline(readableStream, unzip, writableStream);
};

await decompress();
