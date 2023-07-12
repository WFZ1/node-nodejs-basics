import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files', 'fileToCompress.txt']);
const dest = getFilePath(import.meta.url, ['files', 'archive.gz']);

const compress = async () => {
    const gzip = createGzip();

    const readableStream = createReadStream(src);
    const writableStream = createWriteStream(dest);

    pipeline(readableStream, gzip, writableStream);
};

await compress();
