const isPalindrome = require('../palindrome.js');

describe("testing isPalindrome", function(){
    test("should return true for a single letter", function(){
        expect(isPalindrome("a")).toBe(true);
    });
    test("should return true for a single letter repeated", function(){
        expect(isPalindrome("bbb")).toBe(true);
    });
    test("should return true for a simple palindome", function(){
        expect(isPalindrome("bib")).toBe(true);
    });
    test("should return true for a longer palindrome", function(){
        expect(isPalindrome("racecar")).toBe(true);
    });
});