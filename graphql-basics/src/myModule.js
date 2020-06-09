const message = 'Some message from myPants'
const name = 'marty'
const location = 'Portland'

const getGreeting = (name) => {
    return `Welcome to the course ${name}`
}

export { message, name, location as default, getGreeting }
