import path from 'node:path';
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(src);

    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
