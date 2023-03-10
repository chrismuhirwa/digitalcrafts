// For a given number of steps, print out a staircase using hashes.

// input: 4

// output:
// #
// ##
// ###
// ####

const printStaircase = (steps) => {
    let answer = '';
    for (let i = 0; i < steps; i++) {
      answer = answer + '#';
      console.log(answer);
    }
  };
  
  printStaircase(4);