function findLongestWord(sentence) {
    let longestWord = "";
    let longestWordVowelCount = 0;
  
    // Remove any non-letter or non-space character from the sentence
    const cleanedSentence = sentence.replace(/[^a-zA-Z ]/g, "");
  
    // Split the cleaned sentence into an array of words
    const words = cleanedSentence.split(" ");
  
    // Loop through each word to find the longest word with the most vowels
    words.forEach(word => {
      const vowelCount = word.match(/[aeiou]/gi)?.length || 0;
  
      if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > longestWordVowelCount)) {
        longestWord = word;
        longestWordVowelCount = vowelCount;
      }
    });
  
    return longestWord;
  }
  

const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const longestWord = findLongestWord(sentence);

console.log(longestWord); // Output: "experience"