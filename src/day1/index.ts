import { off } from "process";
import { Day } from "../day";

const STRIPPED_REGEX = /[^\d]/g

const digits: { [key: string]: number } = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9
  };


  
class Day0 extends Day {

    constructor(){
        super(0);
    }

    solveForPartOne(input: string): string {
        const lines = input.split("\n")
        let count = 0;

        lines.forEach((line)=>{
            const strippedOfAlpha = line.replace(STRIPPED_REGEX,"")
            const firstNum = parseInt(strippedOfAlpha.at(0) ?? "0")
            const secondNum = parseInt(strippedOfAlpha.at(strippedOfAlpha.length - 1) ?? "0")
            if (!isNaN(firstNum) && !isNaN(secondNum)) {
                const calibrationValue = (firstNum * 10) + secondNum;
                count += calibrationValue;
            }
        })
        return `COUNT: ${count}`;
    }

    solveForPartTwo(input: string): string {
        const lines = input.split("\n")
        let count = 0;

        lines.forEach((line)=>{
            const regExp = /(?=(one|two|three|four|five|six|seven|eight|nine|\d)){1}/g;
            const matches = Array.from(line.matchAll(regExp), (match) => match[1]);
            const firstMatch = matches.at(0)
            const secondMatch = matches.at(matches.length -1 )

            if(firstMatch && secondMatch) {
                let firstNum = parseInt(firstMatch)
                let secondNum = parseInt(secondMatch)
                if(isNaN(firstNum)) {
                    firstNum = digits[firstMatch]
                } 
                
                if(isNaN(secondNum)){
                    secondNum = digits[secondMatch]
                }
                
                const calibrationValue = (firstNum*10) + secondNum

                count+=calibrationValue
            }   
        })

        return `${count}`;
    }
}

export default new Day0;