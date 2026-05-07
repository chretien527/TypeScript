const callbacks = require('./1-callbacks');
const promises = require('./2-promises');
const asyncAwait = require('./3-async-await');

const username = process.argv[2] || 'octocat';

console.log('='.repeat(60));
console.log('COMPARING CALLBACKS, PROMISES, AND ASYNC/AWAIT');
console.log('='.repeat(60));

callbacks.demonstrateCallbackHell(username);
 
setTimeout(() => {
    promises.demonstratePromises(username);
}, 3000);

setTimeout(() => {
    asyncAwait.demonstrateAsyncAwait(username);
}, 6000);