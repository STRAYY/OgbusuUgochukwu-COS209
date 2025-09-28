// Concept: Destructuring extracts values from arrays or objects into variables.
const rgb = [255, 200, 100];
const [r, g, b] = rgb;
console.log('r g b:', r, g, b);

const options = { title: 'Menu', width: 100 };
const { title, width, height = 200 } = options;
console.log(title, width, height);

function createUser({ name, email }) {
  return `User ${name} — ${email}`;
}
console.log(createUser({ name: 'JAY', email: 'jayyen@gmail.com' }));
