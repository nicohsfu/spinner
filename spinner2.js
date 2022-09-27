const arr = ['|', '/', '-', '\\', "|"]; // had to escape the backslash - \ to \\

let delay = 0;
let count = 0;

for (const char of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay += 200);
}

// if we want it to keep cycling
// while (count <= 2) {
//   for (const char of arr) {
//     setTimeout(() => {
//       process.stdout.write(`\r${char}`);
//     }, delay += 200);
//   }
//   count++;
// }
