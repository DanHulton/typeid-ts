"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSuffix = exports.validatePrefix = void 0;
const base32_js_1 = require("../base32.js");
function validatePrefix(prefix) {
    if (prefix === '') {
        return true;
    }
    if (prefix.length > 63) {
        throw Error(`Invalid prefix: ${prefix}. Prefix length is ${prefix.length}, expected <= 63`);
    }
    if (!/^[a-z_]{0,63}$/.test(prefix)) {
        throw Error(`Invalid prefix: ${prefix}.  Prefix should match [a-z]{0,63}`);
    }
    return true;
}
exports.validatePrefix = validatePrefix;
function validateSuffix(suffix) {
    if (/[A-Z]/.test(suffix)) {
        throw Error(`Invalid suffix: ${suffix}`);
    }
    try {
        (0, base32_js_1.decode)(suffix);
        return true;
    }
    catch (err) {
        throw Error(`Invalid suffix: ${suffix}`);
    }
}
exports.validateSuffix = validateSuffix;
//# sourceMappingURL=validators.js.map