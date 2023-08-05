"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidStringToBytes = exports.encodeFromUUID = void 0;
const base32_js_1 = require("../base32.js");
const basics_js_1 = require("./basics.js");
function encodeFromUUID(prefix, uuidStr) {
    const suffix = (0, base32_js_1.encode)(uuidStringToBytes(uuidStr));
    return (0, basics_js_1.from)(prefix, suffix);
}
exports.encodeFromUUID = encodeFromUUID;
function uuidStringToBytes(uuidStr) {
    const hexNoHyphens = uuidStr.replace(/-/g, '');
    const arr = new Uint8Array(16);
    for (let i = 0; i < 16; i++) {
        arr[i] = parseInt(hexNoHyphens.substr(i * 2, 2), 16);
    }
    return arr;
}
exports.uuidStringToBytes = uuidStringToBytes;
//# sourceMappingURL=encoders.js.map