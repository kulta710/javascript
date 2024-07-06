'use strict'
// Callback Hell example -> Promise
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'))
                }
            }, 2000)
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' })
                } else {
                    reject(new Error('no access'))
                }
            }, 1000)
        })
    }
}

const userStorage = new UserStorage()

const id = prompt('Enter your id')
const password = prompt('Enter your password')

async function login (id, password) {
    try {
        const user = await userStorage.loginUser(id, password)
        const userWithRole = await userStorage.getRoles(user)
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
    } catch (error) {
        console.log(error)
    }
}

login(id, password)
