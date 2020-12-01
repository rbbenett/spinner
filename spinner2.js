process.stdout.write('hello from spinner2.js... \rheyyy\n');
const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let i = 0;
for (let item of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  }, i += 200);
}
