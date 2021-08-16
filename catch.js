const p1 = new Promise(() => {})
const p2 = p1.catch();
setTimeout(console.log,0, p1)
setTimeout(console.log,0, p2)
setTimeout(console.log,0, p1 === p2)
