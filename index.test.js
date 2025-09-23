const { isPalindrome } = require("./index");

describe("function exists and accepts 1 arg", () => {
    test("isPalindrome() exists", () => {
        expect(typeof isPalindrome).toBe("function");
    });

    test("isPalindrome accepts exactly one argument", () => {
        expect(isPalindrome.length).toBe(1);
    });
});

describe("validate that only a string is accepted as an input", () => {
    test("should accept a string", () => {
        expect(() => isPalindrome("")).not.toThrow();
    });

    test("should throw an error for number input", () => {
        expect(() => isPalindrome(123)).toThrow('Input must be a string.');
    });

    test("should throw an error for boolean input", () => {
        expect(() => isPalindrome(true)).toThrow('Input must be a string.');
    });

    test("should throw an error for object input", () => {
        expect(() => isPalindrome({ a: 1 })).toThrow('Input must be a string.');
    });

    test("should throw an error for array input", () => {
        expect(() => isPalindrome(['a', 'b'])).toThrow('Input must be a string.');
    });

    test("should throw an error for null input", () => {
        expect(() => isPalindrome(null)).toThrow('Input must be a string.');
    });

    test("should throw an error for undefined input", () => {
        expect(() => isPalindrome(undefined)).toThrow('Input must be a string.');
    });
});

describe("palindrome logic", () => {
    test("should return true for a palindrome input", () => {
        expect(isPalindrome("bob")).toBe(true);
    });

    test("should return false when input is not a palindrome", () => {
        expect(isPalindrome("apple")).toBe(false);
    });

    test("should return true for a capitalization", () => {
        expect(isPalindrome("Racecar")).toBe(true);
    });

    test("should return true for a palindrome with spaces and punctuation", () => {
        expect(isPalindrome("Madam I'm Adam.")).toBe(true);
    });
});

