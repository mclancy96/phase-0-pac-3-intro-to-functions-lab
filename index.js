function shout(string) {
    return string.toUpperCase();
}

const whisper = (userInput) => {
    return userInput.toLowerCase();
}

const logShout = (userInput) => {
    return console.log(shout(userInput))
}

const logWhisper = (userInput) => {
    return console.log(whisper(userInput))
}