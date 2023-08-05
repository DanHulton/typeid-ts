#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_js_1 = require("../src/index.js"); // replace with the path to your encode/decode functions
const program = new commander_1.Command();
program
    .command('new <prefix>')
    .description('create a new typeid with a prefix')
    .action((prefix) => {
    if (prefix.length > 0) {
        prefix = prefix.toLowerCase();
    }
    const newId = (0, index_js_1.generateNew)(prefix);
    console.log(`New typeid: ${newId}`);
});
program
    .command('decode <typeid>')
    .description('decode a typeid')
    .action((typeid) => {
    const encoded = (0, index_js_1.decodeFromString)(typeid);
    console.log(`Decoded typeid: ${JSON.stringify(encoded)}`);
});
program
    .command('encode <prefix> <uuid>')
    .description('encode a typeid from a prefix and a uuid')
    .action((prefix, uuid) => {
    const encoded = (0, index_js_1.encodeFromUUID)(prefix, uuid);
    console.log(`Encoded typeid: ${encoded}`);
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map