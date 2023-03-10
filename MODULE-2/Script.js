// Given a string of characters as input, write a function that returns it with the characters reversed.
function reversestring (hello) {
    return hello;
}
// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.`

const isPalindrome = (string) => {
    const stringArray = string.split("");

    const reversedArray = stringArray.reverse();

    console.log('reversedArray: ', reversedArray);

    const reversedString = reversedArray.join('');

    console.log('reversedString: ', reversedString);

    // 'racecar'
  // v.
  // 'racecar'

  // 'hello'
  // v.
  // 'olleh'

  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('amanaplanacanalpanama'));








