"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const basics_js_1 = require("../src/lib/basics.js");
const decoders_js_1 = require("../src/lib/decoders.js");
const uuidv7_1 = require("uuidv7");
const encoders_js_1 = require("../src/lib/encoders.js");
describe('TypeId Tests', () => {
    it('Should create a new typeId', () => {
        const tid = (0, basics_js_1.transform)((0, basics_js_1.generateNew)('prefix'));
        (0, chai_1.expect)(tid.prefix).to.equal('prefix');
        (0, chai_1.expect)(tid.suffix).to.not.match(/prefix/);
        console.log(`New typeid: ${tid}`);
    });
    it('Should create a new typeId new `typeid`', () => {
        const tid = (0, basics_js_1.transform)((0, basics_js_1.typeid)('prefix'));
        (0, chai_1.expect)(tid.prefix).to.equal('prefix');
        (0, chai_1.expect)(tid.suffix).to.not.match(/prefix/);
        console.log(`New typeid: ${tid}`);
    });
    it('Should create a new typeId without prefix', () => {
        const tid = (0, basics_js_1.transform)((0, basics_js_1.generateNew)(''));
        (0, chai_1.expect)(tid.prefix).to.equal('');
        (0, chai_1.expect)(tid.suffix).to.not.match(/prefix/);
        console.log(`New typeid without prefix: ${tid}`);
    });
    it('Should create typeId from string', () => {
        const tid = (0, basics_js_1.transform)('prefix_00041061050r3gg28a1c60t3gf');
        (0, chai_1.expect)(tid.prefix).to.equal('prefix');
        (0, chai_1.expect)(tid.suffix).to.equal('00041061050r3gg28a1c60t3gf');
    });
    const invalidPrefixes = [
        ['caps', 'PREFIX'],
        ['numeric', '12323'],
        ['symbols', 'pre.fix'],
        ['spaces', '  '],
        ['long', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz']
    ];
    invalidPrefixes.forEach(([name, input]) => {
        it(`Should fail for invalid prefix: ${name}`, () => {
            (0, chai_1.expect)(() => (0, basics_js_1.generateNew)(input)).to.throw(Error);
        });
    });
    const invalidSuffixes = [
        ['spaces', '  '],
        ['short', '01234'],
        ['long', '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'],
        ['caps', '00041061050R3GG28A1C60T3GF'],
        ['hyphens', '00041061050-3gg28a1-60t3gf'],
        ['crockford_ambiguous', 'ooo41o61o5or3gg28a1c6ot3gi'],
        ['symbols', '00041061050.3gg28a1_60t3gf'],
        ['wrong_alphabet', 'ooooooiiiiiiuuuuuuulllllll'],
        ['overflow', '8zzzzzzzzzzzzzzzzzzzzzzzzz'],
    ];
    invalidSuffixes.forEach(([name, input]) => {
        it(`Should fail for invalid suffix: ${name}`, () => {
            (0, chai_1.expect)(() => (0, basics_js_1.from)('prefix', input)).to.throw(Error, `Invalid suffix: ${input}`);
        });
    });
    it('Should correctly encode and decode', () => {
        for (let i = 0; i < 1000; i++) {
            const uuid = (0, uuidv7_1.uuidv7)();
            const tidStr = (0, encoders_js_1.encodeFromUUID)('prefix', uuid);
            const decoded = (0, decoders_js_1.decodeFromString)(tidStr);
            (0, chai_1.expect)(uuid).to.equal(decoded.uuid);
        }
    });
    it('Should correctly encode and decode with empty prefix', () => {
        for (let i = 0; i < 1000; i++) {
            const uuid = (0, uuidv7_1.uuidv7)();
            const tidStr = (0, encoders_js_1.encodeFromUUID)('prefix', uuid);
            const decoded = (0, decoders_js_1.decodeFromString)(tidStr);
            (0, chai_1.expect)(uuid).to.equal(decoded.uuid);
        }
    });
    it('It should generate unique ids', () => {
        const set = new Set();
        for (let i = 0; i < 100; i++) {
            const newId = (0, basics_js_1.generateNew)('knot');
            (0, chai_1.expect)(set.has(newId)).to.equal(false);
            set.add(newId);
        }
    });
});
//# sourceMappingURL=typeid.test.js.map