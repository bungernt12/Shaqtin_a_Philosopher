//console.log('Hello World.')

const commandNegative = ["Don't be like", 'My momma said don\'t trust', 'Haters be like'];
const commandPositive = ["Be like", 'Take it from', 'You want a champion? Look at' ];
const thingNegative = ["Chuck", "the '98 Nuggets", 'rich-people food', 'me' ];
const thingPositive = ["my momma", '11 time NBA Champion, Phil Jackson', 'me'];
const advice = ["Quit playin with me", "Be a man", "Just say sorry", "Family comes first", "I am Superman", "Love is a verb, not a noun.", "I'd punch em straight in the mouth" ];

const pickRandEl = arr => {
    let randEl = arr[Math.floor(Math.random() * arr.length)];
    //console.log(randEl);
    return randEl;
}

console.log(`${pickRandEl(commandPositive)} ${pickRandEl(thingPositive)}: ${pickRandEl(advice)}`);