'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    
    let amp: string = s.slice(8, 10)
    let hr: string = s.slice(0, 2)
    let hours: number = parseInt(hr, 10)
    let same: string = s.slice(0, 8)
    let next: string = s.slice(2, 8)
    
    if(amp === 'AM'){
        if(hours == 12){
            return '00'+next
        }else{
            return same
        }
    }else{
        if(hours == 12){
            return same
        }else{
            let fin: number = hours+12
            
            return ''+fin + next
        }
    }

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
