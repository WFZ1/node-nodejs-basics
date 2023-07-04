import { cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { throwError } from '../utils/throwError.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'files');
const dest = path.resolve(__dirname, 'files_copy');

const copy = async () => {
    try {
        await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
    } catch (_) {
        throwError();
    }
};

await copy();
