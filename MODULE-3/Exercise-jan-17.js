// Given an array of items, reverse the order.

function reverseArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    const swapIndex = array.length - 1 - i;
    array[i] = array[swapIndex];
    array[swapIndex] = temp;
  }

  return array;
}

const arrayToReverse = [ 1, 2, 3, 4 ];
const result = reverseArray(arrayToReverse);

console.log(result);