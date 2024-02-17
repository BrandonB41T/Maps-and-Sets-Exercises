// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length ? true : false;



// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    const vowels = "aeiou";
    const isVowel = (char) => vowels.includes(char.toLowerCase());

    const map = new Map();

    for (let char of str) {
        const letter = char.toLowerCase();
        if (isVowel(letter) && map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        } else if (isVowel(letter) && !map.has(letter)) {
            map.set(letter, 1);
        }
    };

    return map;
}