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

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// The big O of the entire function is O(n)
