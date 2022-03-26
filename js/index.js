/* ## Instructions

### Iteration 1: Names and Input

	1.1 Create a variable `hacker1` with the driver's name.

	1.2 Print `"The driver's name is XXXX"`.

  	1.3 Create a variable `hacker2` with the navigator's name.

  	1.4 Print `"The navigator's name is YYYY"`.

### Iteration 2: Conditionals
  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
	  - `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`.

### Iteration 3: Loops
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`
  
  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
  
  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`
*/

// Iteration 1: Names and Input
//

let hacker1 = 'Ksenia'

let hacker2 = 'Anand'

console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
let formattedName = ''

for (letter of hacker1.toUpperCase()) {
    formattedName += letter + ' '
}

console.log(formattedName)

//3.2
let reverseName = "";
for (let i=hacker2.length-1; i>=0 ; i--){
    console.log(hacker2[i]);
    reverseName += hacker2[i];
}
console.log(reverseName)

//3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
}

else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")
}

else console.log("What?! You both have the same name?")

//Bonus1 

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel sem aliquam, tincidunt nisl quis, ullamcorper urna. Fusce mi massa, condimentum eu dolor nec, pretium iaculis ipsum. Nullam ut orci lorem. Aliquam erat volutpat. Proin ornare orci non gravida ornare. Pellentesque bibendum mi magna, at tincidunt ligula sollicitudin in. 
Ut nunc orci, egestas non congue vel, bibendum vitae ante. Nam eu risus dignissim, egestas dolor nec, interdum nisi. Ut fermentum lobortis faucibus. Curabitur a elit ante. 
Praesent sit amet libero risus. Nulla efficitur ullamcorper lacus placerat rhoncus. Duis ullamcorper dapibus sapien ut consequat. Etiam suscipit sit amet lorem sed varius. 
Vivamus sit amet commodo felis. Nam cursus quam et leo bibendum, sollicitudin vestibulum enim congue. Nullam tempor ligula quis nisi vulputate, sit amet fermentum purus sodales. 
Integer nec placerat sem, non dapibus magna. Suspendisse suscipit tortor quis ex ullamcorper, sed sollicitudin justo ultrices. Vivamus tempus auctor turpis porttitor bibendum. 
Aenean id dignissim nunc. Suspendisse vel elementum urna. Vestibulum elit est, consectetur et eleifend eu, posuere in nisl. Donec neque mi, venenatis id sapien in, egestas 
euismod massa. Nam nec commodo sapien, rutrum interdum ligula. In porta tristique felis eu aliquet. Curabitur interdum risus magna, eget pharetra neque posuere nec. Cras 
imperdiet augue eu eros blandit, et facilisis neque porta. Donec et velit nunc. Etiam ac sem mauris. Maecenas lobortis justo ante, id tempor quam porta vel. Sed laoreet libero 
accumsan, tempor massa eget, molestie tellus. Vestibulum tristique imperdiet lacinia. Quisque vel sem vitae turpis sollicitudin porttitor. Duis eget metus aliquam, aliquet leo quis, 
tincidunt magna.`

const result = paragraphs.split(' ')
console.log(`Total words in paragraphs: ${result.length}`)

let counter = 0
for (element of result){
    if(element === 'et'){
        counter++
    }
}
console.log(`The number of times 'et' appears is: ${counter}`)

//Bonus2

let phraseToCheck = 'A man, a plan, a canal, Panama!'
let lowerCase = phraseToCheck.toLowerCase()
let formattedPhraseToCheck = lowerCase.split(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/).join('')

console.log(formattedPhraseToCheck)

let isPalindrome = true;

for (let i = 0, j = formattedPhraseToCheck.length-1; i < formattedPhraseToCheck.length; i++, j-- ){  
    if (formattedPhraseToCheck[i] === formattedPhraseToCheck[j]){
        continue;
    } 
    else {
        isPalindrome = false 
            break;
    }
}

console.log(`Is the phrase: ${phraseToCheck} a palindrome? ${isPalindrome}`)