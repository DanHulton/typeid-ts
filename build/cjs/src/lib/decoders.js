"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeFromString = exports.decodeFrom = exports.decodeUUIDBytes = exports.bytesToUUIDString = void 0;
const base32_js_1 = require("../base32.js");
const validators_js_1 = require("./validators.js");
function bytesToUUIDString(bytes) {
    const hex = Array.from(bytes).map(b => {
        return ('00' + b.toString(16)).slice(-2);
    }).join('');
    const uuidStr = hex.slice(0, 8) + '-' + hex.slice(8, 12) + '-' + hex.slice(12, 16) + '-' +
        hex.slice(16, 20) + '-' + hex.slice(20, 32);
    return uuidStr;
}
exports.bytesToUUIDString = bytesToUUIDString;
function decodeUUIDBytes(tid) {
    // converts the suffix to a UUID string
    const decoded = (0, base32_js_1.decode)(tid.suffix);
    if (!decoded) {
        throw new Error('Invalid base32 string');
    }
    return decoded;
}
exports.decodeUUIDBytes = decodeUUIDBytes;
function decodeFrom(prefix, suffix) {
    // decodes into a UUID string
    if (!(0, validators_js_1.validatePrefix)(prefix)) {
        throw new Error(`Invalid prefix: '${prefix}'. Prefix should match [a-z]+`);
    }
    if (!(0, validators_js_1.validateSuffix)(suffix)) {
        throw new Error('Invalid suffix');
    }
    return {
        type: prefix,
        uuid: bytesToUUIDString((0, base32_js_1.decode)(suffix))
    };
}
exports.decodeFrom = decodeFrom;
function decodeFromString(s) {
    const parts = s.split('_', 2);
    return decodeFrom(parts[0], parts[1]);
}
exports.decodeFromString = decodeFromString;
//# sourceMappingURL=decoders.js.map