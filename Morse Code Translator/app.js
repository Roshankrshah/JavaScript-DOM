import morseCode from "./dictonary.js";

const reverseMorseCode = {};
for (const key in morseCode) {
  if (morseCode.hasOwnProperty(key)) {
    const value = morseCode[key];
    reverseMorseCode[value] = key;
  }
}

const inputField = document.getElementById("input");
const translateButton = document.getElementById("translate");
const outputField = document.getElementById("output");

translateButton.addEventListener('click',()=>{
    const inputText = inputField.value.trim().toUpperCase();
    if(inputText === ''){
        outputField.textContent = 'No Input Provided';
        return;
    }
    if(inputText.includes('.')){
        const morseWords = inputText.split('/');
        const translateWords = morseWords.map(morseWord =>{
            const morseChars = morseWord.split(" ");
            return morseChars.map(morseChar => {
                return reverseMorseCode[morseChar] || morseChar;
            }).join('');
        })
        outputField.textContent = translateWords.join(' ');
    }else{
        const words = inputText.split(' ');
        const translatedWords = words.map(word =>{
            const chars = word.split('');
            const morseChars = chars.map(char=>{
                return morseCode[char] || char;
            });
            return morseChars.join(' ');
        });
        outputField.textContent = translatedWords.join('/');
    }
});