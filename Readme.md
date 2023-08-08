# Node.js basics

## Description

Learning Node.js basics

## Requirements

Node version not older than 18.14.0

## Setup

Run `npm i`

## Starting application

There are several different modes of operation:

-   Run with `npm run cli:args` to parse command line arguments and prints them to the console
-   Run with `npm run cli:env` to parse environment variables with prefix _RSS\__ and prints them to the console
-   Run with `npm run cp` to check that Child Processes works fine in _src/cp/cp.js_
-   Run with `npm run fs:copy` to copy folder _src/fs/files_ files into _folder src/fs/files_copy_ at the same level
-   Run with `npm run fs:create` to create new file _fresh.txt_ in _src/fs/files_
-   Run with `npm run fs:delete` to delete file _fileToRemove.txt_ in _src/fs/files_
-   Run with `npm run fs:list` to print all array of filenames from _src/fs/files_ folder into console
-   Run with `npm run fs:read` to print content of the _src/fs/files/fileToRead.txt_ into console
-   Run with `npm run fs:rename` to rename file _wrongFilename.txt_ to _properFilename.md_ in _src/fs/files_
-   Run with `npm run hash` to calculate SHA256 hash for file _src/hash/files/fileToCalculateHashFor.txt_ and logs it into console as hex
-   Run with `npm run modules` to check that ECMAScript notation works fine in _src/modules/esm.mjs_
-   Run with `npm run streams:read` to read file _src/streams/files/fileToRead.txt_ content and prints it into console
-   Run with `npm run streams:transform` to read data from console, reverse text and then writes it into console
-   Run with `npm run streams:write` to write console data into file _src/streams/files/fileToWrite.txt_
-   Run with `npm run wt` to check that Worker Threads works fine in _src/wt/main.js_
-   Run with `npm run zip:compress` to compress file _src/zip/files/fileToCompress.txt_ to _archive.gz_
-   Run with `npm run zip:decompress` to decompress file _src/zip/files/archive.gz_ back to the _fileToCompress.txt_
