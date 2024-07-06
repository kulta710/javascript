// async & await
// clear style of using promise :)

// 1. async ✨
/*
function fetchUser () {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs....

        resolve('ellie')
    })
}
*/

async function fetchUser () {
    // do network request in 10 secs....

    return 'ellie'
}

fetchUser().then(console.log)

// 2. await ✨
function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple () {
    await delay(1000)
    //throw new Error('error')
    return '🍎'
}

async function getBanana () {
    await delay(1000)
    return '🍌'
}

/*
function getBanana () {
    delay(3000)
    .then(() => '🍌')
}
*/

function pickFruits () {    
    getApple().then(apple => {
        getBanana().then(banana => {console.log(`${apple} + ${banana}`)})
    })
}

pickFruits()

async function asyncPickFruits () {
    const apple = await getApple()
    const banana = await getBanana()

    return `${apple} + ${banana}`
}

asyncPickFruits().then(console.log)

// 예외 처리
async function asyncCatchErrorPickFruits () {
    try {
        const apple = await getApple()
        const banana = await getBanana()

        return `${apple} + ${banana}`
    } catch (error) {
        console.log(error)
    }    
}

asyncCatchErrorPickFruits().then(console.log)

// 병렬 처리
async function asyncPickFruits () {
    // promise를 안에서 생성해주면 병렬 처리할 수 있다고 한다.
    const applePromise = getApple()
    const bananaPromise = getBanana()
    
    const apple = await applePromise
    const banana = await bananaPromise

    return `${apple} + ${banana}`
}

asyncPickFruits().then(console.log)

// 3. useful Promise APIs
// 진정한 병렬 처리
function pickAllFruits () {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'))
}

pickAllFruits().then(console.log)

// 먼저 resolve되는 것만 받아오기
function pickOnlyOne () {
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)