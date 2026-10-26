const welcome = (name, title = 'Scrub') => {
    return { message: `Hello ${name}, rank: ${title}. How are you today?`}
}



const welcomeObject = welcome('Wisdom', 'Pro')

console.log(welcomeObject.message)

const welcomeObject2 = welcome('Felix')

console.log(welcomeObject2.message)