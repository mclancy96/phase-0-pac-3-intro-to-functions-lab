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

const sayHiToHeadphonedRoommate = (userInput) => {
    if (whisper(userInput) === userInput) {
        return "I can't hear you!";
    } else if (shout(userInput) === userInput) {
        return "YES INDEED!";
    }
    return "I would love to!";
}
