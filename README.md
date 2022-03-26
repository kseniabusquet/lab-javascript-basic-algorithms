![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Basic Algorithms 

Welcome to your first bootcamp exercise at Ironhack!

The goal of this exercise is to get you familiarized with the primitive data structures in JavaScript, which we just covered in the class. Feel free to reference lesson materials and don't limit yourself but be curious and use Google to explore multiple solutions.

Ready?

## Introduction

For this **pair-programming** activity we are going to use a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop). You can find a REPL that runs in the browser for programming languages as JavaScript in [https://repl.it/languages/babel](https://repl.it/languages/babel).

Ready to start?


## Requirements

- Fork this repo
- Clone this repo
- Go to [repl.it](https://repl.it/languages/nodejs) and create an account (or login if you have one)
- Type this in the *Code Editor* (left panel)

  ```javascript
  console.log("I'm ready!");
  ```
- Press `run ►`
- If you can see the message in the right side panel, you are really ready!

  <!-- ![](https://i.imgur.com/4TQislb.png) -->
  ![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_17f095b9bb4fa4bd1bee1c017c043327.png)

- __When you are done completely or at any point after the first iteration, copy your code into the `js/index.js` file and follow the steps for submission.__

## Submission

Upon completion, run the following commands:
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Create Pull Request so your TAs can check up your work.

_You should make a PR (stands for Pull Request) as soon as you make any significant change. You shouldn't have to wait until you're completely done with this or any other exercise to make the PR. After you do the first PR, any other time you push the changes (following the previous three steps), your change will appear automatically on the PR and your TAs will be able to check it._

<!-- ## Submission -->

<!-- When you are done and you have checked that everything works fine, click on the **Share** button and copy the link from the *Share Link* field. Send this link to your TAs so they can check up your work.
![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_b2aa98f91affe5d4c5f12f216b069184.png) -->

## Instructions

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

### Bonus Time!

#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

#### Bonus 2:
Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
  
  __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: 

## Extra Resources

- [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)


__Happy coding!__ :heart:

Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@kseniabusquet 
kseniabusquet
/
lab-javascript-basic-algorithms
Public
forked from ironhack-labs/lab-javascript-basic-algorithms
Code
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
lab-javascript-basic-algorithms/js/index.js /
@kseniabusquet
kseniabusquet Bonus 2 - complete
Latest commit b784b21 30 minutes ago
 History
 5 contributors
@J-1000@kseniabusquet@sandrabosk@Tzikas@Cule219
127 lines (94 sloc)  4.94 KB
   
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
