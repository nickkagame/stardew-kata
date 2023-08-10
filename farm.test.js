// your code here
const {cropWateringCalculator, cropWateringCalculatorImproved} = require('./farm')
const {mixedForecast, noRainForecast} = require('./resources/weather')

describe("Cropwatering kata", () => {
    describe("cropWateringCalculator()", () => {
        test("returns a number when passed an empty array" , () => {
            const act = cropWateringCalculator(mixedForecast)
            expect(act).toEqual(expect.any(Number))
        })
        test("returns correct number when passed in a mixed forecast" , () => {
            const act = cropWateringCalculator(mixedForecast)
            expect(act).toBe(7)
        })
        test("returns correct number when passed a no rain forecast" , () => {
            const act = cropWateringCalculator(noRainForecast)
            expect(act).toBe(0)
        })
        test("array is not mutated", () => {
            const input = mixedForecast
            cropWateringCalculator(input)
            expect(input).toEqual([
                {day: 1, weather: "rain"},
                {day: 2, weather: "sunny"},
                {day: 3, weather: "sunny"},
                {day: 4, weather: "clear"},
                {day: 5, weather: "rain"},
                {day: 6, weather: "snow"},
                {day: 7, weather: "misty"},
                {day: 8, weather: "sunny"},
                {day: 9, weather: "clear"},
                {day: 10, weather: "foggy"},
                {day: 11, weather: "rain"},
                {day: 12, weather: "rain"},
                {day: 13, weather: "sunny"},
                {day: 14, weather: "sunny"},
                {day: 15, weather: "clear"},
                {day: 16, weather: "foggy"},
                {day: 17, weather: "cloudy"},
                {day: 18, weather: "foggy"},
                {day: 19, weather: "rain"},
                {day: 20, weather: "clear"},
                {day: 21, weather: "sunny"},
                {day: 22, weather: "rain"},
                {day: 23, weather: "rain"},
                {day: 24, weather: "clear"},
                {day: 25, weather: "sunny"},
                {day: 26, weather: "snow"},
                {day: 27, weather: "misty"},
                {day: 28, weather: "sunny"},    
            ])
        })
    })
    describe('cropWateringCalculatorImproved', () => {
        test('will return a string', () => {
            const act = cropWateringCalculatorImproved(mixedForecast)
            expect(act).toEqual(expect.any(String))
        })
        test("returns correct string when passed in a dry forecast" , () => {
            const act = cropWateringCalculatorImproved(noRainForecast, 10)
            expect(act).toBe('There are 0 days that you can skip watering your crops. You will need 280 sprinkles of water.')
        })
        test("returns correct string when passed in a mixed forecast" , () => {
            const act = cropWateringCalculatorImproved(mixedForecast, 6)
            expect(act).toBe('There are 7 days that you can skip watering your crops. You will need 126 sprinkles of water.')
        })
        test("returns correct string when passed in a mixed forecast, crop numbers, and can unit equal to true" , () => {
            const act = cropWateringCalculatorImproved(mixedForecast, 6, true)
            expect(act).toBe('There are 7 days that you can skip watering your crops. You will need 3.15 cans of water.')
        })
    });
})