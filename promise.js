const p1 = Promise.resolve('foo');
const p10 = p1.then(() => {
    throw 'bax';
})
const p11 = p1.then(() => Error('aaa'));
setTimeout(console.log, 0, p10);
setTimeout(console.log, 0, p11);

const p2 = Promise.reject('foo')
const p3 = p2.then();
setTimeout(console.log, 0, p3);
const p4 = p2.then(null, () => {})
setTimeout(console.log, 0, p4);
const p5 = p2.then(null, () => 'bar')
setTimeout(console.log, 0, p5);
