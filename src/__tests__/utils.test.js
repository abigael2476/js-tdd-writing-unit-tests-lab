import { currentAgeForBirthYear, pointsForWord, isPalindrome } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    const currentYear = new Date().getFullYear();
    expect(ageOfPerson).toBe(currentYear - 1984);
  });

  it("returns the current year for a person born in year 0", () => {
    const birthYear = 0;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    const currentYear = new Date().getFullYear();
    expect(ageOfPerson).toBe(currentYear);
  });
});

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });
});

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(() => isPalindrome("")).toThrow("Input must contain only alphabetic characters");
  });

  it("handles uppercase and lowercase input", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("throws error for non-alphabetic characters", () => {
    expect(() => isPalindrome("abc123")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
