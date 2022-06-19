const primeFactor = require("./primeFactor");

describe("test to se if i get highest prime factor", () => {
    test("to get the 7 as prime factor of 7", () => {
        const numSeven = primeFactor.getHighestPrime(8);
        expect(numSeven).toBe(7);

    })
    test("to se if i get 2 length prime number", () => {
        const numTwNine = primeFactor.getHighestPrime(27);
        expect(numTwNine).toBe(29);
    })
})