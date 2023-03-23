/* Big O Notation */

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    // O(n)
    // anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++;
  }
  return a; // O(1) return statement returns only ONCE
}

console.log(funChallenge([1, 2, 3, 4]));

/* The entire function is O(n), however line 5 is O(1), as well as line 6
 ** The loop itself is O(n) because is relying on the size of our input parameter. As the input increases, the number of operations will increase as well.
 ** Additionally, anything within the loop will be O(n) because it depends on the input
 */
