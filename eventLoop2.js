console.log(1)

Promise.resolve().then(() => {
    console.log('promise')
})

setTimeout(() => {
    console.log('settimeout')
})
