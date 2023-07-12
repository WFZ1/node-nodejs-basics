import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';
import { getFilePath } from '../utils/getFilePath.js';

const INCREMENT_BY_DEFAULT = 10;

const workerSrc = getFilePath(import.meta.url, ['worker.js']);

const getWorker = (index) => {
    return new Promise((resolve) => {
        const worker = new Worker(workerSrc, { workerData: index + INCREMENT_BY_DEFAULT });

        worker.on('message', (data) =>
            resolve({
                status: 'resolved',
                data,
            })
        );

        worker.on('error', () =>
            resolve({
                status: 'error',
                data: null,
            })
        );
    });
};

const performCalculations = async () => {
    const workersPool = Array.from({ length: availableParallelism() }, (_, index) => getWorker(index));
    const result = await Promise.all(workersPool);

    console.log(result);
};

await performCalculations();
