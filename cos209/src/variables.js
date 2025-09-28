// Concept: var is function-scoped, let and const are block-scoped. const prevents reassignment.
function variableScopeDemo() {
  if (true) {
    var a = 'function-scoped var';
    let b = 'block-scoped let';
    const c = 'block-scoped const';
    console.log(a, b, c);
  }
  console.log('a outside block:', a);
}

variableScopeDemo();

const arr = [1, 2, 3];
arr.push(4);
console.log('arr after push:', arr);
