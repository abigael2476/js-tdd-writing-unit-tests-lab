// Calculate age based on birth year
export function currentAgeForBirthYear(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// Calculate points for a word (1 per vowel, 2 per consonant)
export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}

// Check if a word is a palindrome
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  if (word === "") return false;

  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}
