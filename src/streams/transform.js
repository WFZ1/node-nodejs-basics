import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transformStream = new Transform({
    transform(chunk, _, callback) {
        const chunkStringified = chunk.toString().trim();
        const reversedChunk = chunkStringified.split('').reverse().join('');

        callback(null, `${reversedChunk}\n`);
    },
});

const transform = async () => {
    pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
