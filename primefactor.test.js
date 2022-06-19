const primeFactor = require("./primeFactor");

describe("test to se if i get highest prime factor", () => {
    test("to get the 7 as prime factor of 7", () => {
        const numSeven = primeFactor.getHighestPrime(7);
        expect(numSeven).toBe(7);

    })
    test("to se if i get 2 length prime number", () => {
        const numTwNine = primeFactor.getHighestPrime(29);
        expect(numTwNine).toBe(29);
    })
    test("to see if i get correct number for euler exercise", () => {
        const bigNum = primeFactor.getHighestPrime(600851475143);
        expect(bigNum).toBe(6857);
    })
})