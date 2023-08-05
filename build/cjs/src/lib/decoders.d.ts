import { IDecoded } from './models/decoded.js';
import { ITypeID } from './models/typeid.js';
export declare function bytesToUUIDString(bytes: Uint8Array): string;
export declare function decodeUUIDBytes(tid: ITypeID): Uint8Array;
export declare function decodeFrom(prefix: string, suffix: string): IDecoded;
export declare function decodeFromString(s: string): IDecoded;
//# sourceMappingURL=decoders.d.ts.map