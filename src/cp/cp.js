import { getFilePath } from '../utils/getFilePath.js';
import { fork } from 'node:child_process';

const src = getFilePath(import.meta.url, ['files', 'script.js']);

const spawnChildProcess = async (args) => {
    fork(src, args);
};

spawnChildProcess(['Hi', 'I am FE dev', 'I sleep', 0, 'hours.', 'It is', true]);
