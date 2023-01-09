// the value that the user entered will be stored in userInput
const userInput = prompt('Insert your password/username here: ');

// convert the value stored in userInput into an array of characters
const userInputArray = userInput.split('');

//empyt array, to be used to store the masked input entered from the user
const maskedInput = [];

//for loop to mask all the elements except the last two and store it in maskedInput
for (let i = 0; i < userInputArray.length - 2; i ++) {
    maskedInput.push(userInputArray[i] = '#');
};

//adding the last 2 elements to be visible to the maskedInput
maskedInput.push(userInputArray[userInputArray.length - 2]);
maskedInput.push(userInputArray[userInputArray.length - 1]);

console.log(maskedInput);

//optional
console.log(userInput);

//made on 2023/01/09
//thedrew94