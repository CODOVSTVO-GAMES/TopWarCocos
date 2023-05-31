import { _decorator } from 'cc';

export class ConvertLargeNumber {

    static abbreviationsNumbers: string[] = ["K", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q"];

    static convert(value: number): string {
        if (value < 1000) {
            return value.toString();
        }
        let count = 1000;
        for (let i = 0; i < 5; i++) {
            if (value >= count * 1000) {
                count *= 1000;
            }
            else {
                let dirtyResult = (value / count).toString();
                let netResult = "";
                for (let j = 0; j < dirtyResult.length; j++) {
                    if (dirtyResult[j] == ".") {
                        netResult += dirtyResult[j];
                        if (dirtyResult.length > j + 1) {
                            netResult += dirtyResult[j + 1];
                        }
                        break;
                    }
                    else {
                        netResult += dirtyResult[j];
                    }
                }
                return netResult + this.abbreviationsNumbers[i];
            }
        }
    }
}
