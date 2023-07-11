import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files', 'fileToCalculateHashFor.txt']);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(src);

    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
