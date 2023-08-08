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
-   Run with `npm run cli:env` to parse environment variables with prefix RSS\_ and prints them to the console
-   Run with `npm run cp` to check that Child Processes works fine in src/cp/cp.js
-   Run with `npm run fs:copy` to copy folder src/fs/files files into folder src/fs/files_copy at the same level
-   Run with `npm run fs:create` to create new file fresh.txt in src/fs/files
-   Run with `npm run fs:delete` to delete file fileToRemove.txt in src/fs/files
-   Run with `npm run fs:list` to print all array of filenames from src/fs/files folder into console
-   Run with `npm run fs:read` to print content of the src/fs/files/fileToRead.txt into console
-   Run with `npm run fs:rename` to rename file wrongFilename.txt to properFilename.md in src/fs/files
-   Run with `npm run hash` to calculate SHA256 hash for file src/hash/files/fileToCalculateHashFor.txt and logs it into console as hex
-   Run with `npm run modules` to check that ECMAScript notation works fine in src/modules/esm.mjs
-   Run with `npm run streams:read` to read file src/streams/files/fileToRead.txt content and prints it into console
-   Run with `npm run streams:transform` to read data from console, reverse text and then writes it into console
-   Run with `npm run streams:write` to write console data into file src/streams/files/fileToWrite.txt
-   Run with `npm run wt` to check that Worker Threads works fine in src/wt/main.js
-   Run with `npm run zip:compress` to compress file src/zip/files/fileToCompress.txt to archive.gz
-   Run with `npm run zip:decompress` to decompress file src/zip/files/archive.gz back to the fileToCompress.txt
