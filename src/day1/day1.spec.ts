import day1 from './index';

const part2= `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

describe('On Day 1', () =>{
    it(`part1 is identity function`,async ()=>{
        expect(day1.solveForPartOne(await day1.partOne())).toBe('hello');
    })
    it(`part2 correctly returns the value`,() => {
        expect(day1.solveForPartTwo(part2)).toBe(281)
    })
});