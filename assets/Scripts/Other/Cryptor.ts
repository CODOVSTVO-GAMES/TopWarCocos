import { md5 } from '../Library/md5';

export class Cryptor {

    static hashGenerate(str: string): string {
        // console.log(md5(str).toString())
        return md5(str).toString();
    }

    static getRandomHash(): string {
        return this.hashGenerate(Math.random().toString())
    }

    static getHashByObj(obj: object) {
        const str = JSON.stringify(obj)
        return this.hashGenerate("data_" + str)
    }
}