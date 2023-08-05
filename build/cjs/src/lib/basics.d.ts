import { ITypeID } from './models/typeid.js';
export declare function generateNew(prefix: string): string;
export declare const typeid: typeof generateNew;
export declare function transform(str: string): ITypeID;
export declare function getType(tid: ITypeID): string;
export declare function getSuffix(tid: ITypeID): string;
export declare function toString(tid: ITypeID): string;
export declare function from(prefix: string, suffix: string): string;
//# sourceMappingURL=basics.d.ts.map