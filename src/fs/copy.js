import { cp } from 'node:fs/promises';
import { throwError } from '../utils/throwError.js';
import { getFilePath } from '../utils/getFilePath.js';

const src = getFilePath(import.meta.url, ['files']);
const dest = getFilePath(import.meta.url, ['files_copy']);

const copy = async () => {
    try {
        await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
    } catch (_) {
        throwError();
    }
};

await copy();
