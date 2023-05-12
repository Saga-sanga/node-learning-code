const interval = setInterval(() => console.log("Hello World"), 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Goodbye World");
}, 5000);

console.log(__dirname);
console.log(__filename);
