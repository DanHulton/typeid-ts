"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv7_1 = require("uuidv7");
const basics_js_1 = require("../src/lib/basics.js");
const encoders_js_1 = require("../src/lib/encoders.js");
const decoders_js_1 = require("../src/lib/decoders.js");
describe('TypeId Tests', () => {
    it('Should benchmark New', () => {
        for (let i = 0; i < 100000; i++) {
            (0, basics_js_1.generateNew)('prefix');
        }
    });
    it('Should benchmark Encode and Decode', () => {
        for (let i = 0; i < 100000; i++) {
            const uuid = (0, uuidv7_1.uuidv7)();
            const tidStr = (0, encoders_js_1.encodeFromUUID)('prefix', uuid);
            const decoded = (0, decoders_js_1.decodeFromString)(tidStr);
            decoded;
        }
    });
});
//# sourceMappingURL=benchmarking.js.map