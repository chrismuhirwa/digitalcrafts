// Given a string of words or phrases, count the number of vowels.

const getVowelCount = (string) => {
    for(var x = 0; x < string.length ; x++)
  {
    if (vowel_list.indexOf(string[x]) !== -1)
    {
      getVowelCount += 1;
    }
  
  }
  return getVowelCount;

};

console.log(getVowelCount("hello world"));
