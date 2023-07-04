import { stat } from 'node:fs/promises';

export const checkFileExists = async (filePath) => Boolean(await stat(filePath).catch(() => false));
