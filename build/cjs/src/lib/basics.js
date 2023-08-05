"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.from = exports.toString = exports.getSuffix = exports.getType = exports.transform = exports.typeid = exports.generateNew = void 0;
const validators_js_1 = require("./validators.js");
const encoders_js_1 = require("./encoders.js");
const base32_js_1 = require("../base32.js");
let uuidv7;
(async () => {
    const mod = await import('uuidv7');
    uuidv7 = mod.uuidv7;
})();
function generateNew(prefix) {
    return from(prefix, '');
}
exports.generateNew = generateNew;
exports.typeid = generateNew;
function transform(str) {
    const parts = str.split('_', 2);
    return { prefix: parts[0], suffix: parts[1] };
}
exports.transform = transform;
function getType(tid) {
    return tid.prefix;
}
exports.getType = getType;
function getSuffix(tid) {
    return tid.suffix;
}
exports.getSuffix = getSuffix;
function toString(tid) {
    // converts to a string in the format of prefix_suffix
    if (tid.prefix === '') {
        return tid.suffix;
    }
    return `${tid.prefix}_${tid.suffix}`;
}
exports.toString = toString;
function from(prefix, suffix) {
    if (!(0, validators_js_1.validatePrefix)(prefix)) {
        throw new Error(`Invalid prefix: '${prefix}'. Prefix should match [a-z]+`);
    }
    if (suffix === '') {
        const uid = uuidv7();
        suffix = (0, base32_js_1.encode)((0, encoders_js_1.uuidStringToBytes)(uid));
    }
    else {
        if (!(0, validators_js_1.validateSuffix)(suffix)) {
            throw new Error('Invalid suffix');
        }
    }
    return `${prefix}_${suffix}`;
}
exports.from = from;
//# sourceMappingURL=basics.js.map