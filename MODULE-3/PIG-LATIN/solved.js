// Translate a phrase into Pig Latin.

// input: Learning JavaScript is so much fun
// output: earningLay avaScriptJay siay osay uchmay unfay

const translateIntoPigLatin = (phrase) => {
    const result = [];
    const phraseArray = phrase.split(" ");

    for (let word of phraseArray) {
        // first letter
        const firstLetter = word.substring(0, 1);
        console.log(firstLetter)
        // restOfWord
        const restOfWord = word.substring(1);
        const newWord = restOfWord + firstLetter + "ay";
        result.push(newWord);
    }
    return result.join(" ");
};

console.log(translateIntoPigLatin('Learning JavaScript is so much fun'));