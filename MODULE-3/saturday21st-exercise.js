// Given a phrase, capitalize the first letter of each word.

// input: I want to ride my bicycle.
// output: I Want To Ride My Bicycle.

const capitalize = (phrase) => {
  const capitalizedArray = [];
  const phraseArray = phrase.split(" ");

//   loop goes here
for (let word of phraseArray)
{
    const capitalizedFirstLetter = word[0].toUpperCase();
    const restofWord = word.slice(1);
    const newWord = capitalizedFirstLetter + restofWord;
    capitalizedArray.push(newWord)
}
    const capitalizedPhrase = capitalizedArray.join(" ");
    return capitalizedPhrase;
}

console.log(capitalize('I want to ride my bicycle.'));