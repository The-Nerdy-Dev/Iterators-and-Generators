// The logs in the generatorFunction defined below demonstrates what
// exactly a a generator does when it starts execution

// Use the * to define a generator function
function* generatorFunction() {
  console.log('I will be executed first...');
  // yield keyword is used to pause and save the state (basically a check point)
  // yield keyword has the pause and resume effect because of these generators
  // does not follow the run to completion model. You can stop them at any point
  // and resume when you want.
  yield 'Hello';
  // If you use return keyword, it will immediately return from the generator function
  // and subsequent lines of code below the return will not be executed
  // return 'I am returning from the generator';
  console.log('I will be printed next...after some pause or some duration');
  yield 'World!';
}

// **************  Refer slides in the video
// generatorObject.next() { value: 'Hello', done: false}
// Step 1: Create a generator object

const generatorObject = generatorFunction();
// Generating a sequence of value until done becomes false.
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
