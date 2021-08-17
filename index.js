const names = ["Devin", "Emily", "Mom and Dad"];
const birthday = []
function writeCards(birthday) {
    for(let i = 0; i < birthday.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful gift!`)
        debugger
    }
    return writeCards
}

writeCards(birthday)

let countdown = 10
while (countdown >= 0) {
    console.log(countdown--)
}

countdown