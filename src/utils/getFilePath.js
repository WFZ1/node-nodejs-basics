import path from 'node:path';
import { fileURLToPath } from 'url';

export const getFilePath = (url, paths) => {
    const __dirname = path.dirname(fileURLToPath(url));
    return path.join(__dirname, ...paths);
};
