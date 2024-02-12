const checkFive = require('../checkFive.js');

describe("check five", function(){
    
    test("should return 5 is equal to 5", function(){
        expect(checkFive(5)).toBe("5 is equal to 5.");
    });
    test("should return 2 is less than 5", function(){
        expect(checkFive(2)).toBe("2 is less than 5.");
    });
    test("should return 15 is greater than 5", function(){
        expect(checkFive(  "15"  )).toBe("15 is greater than 5.");
    });
});