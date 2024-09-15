# Geography Word Scramble Game
## Introduction
#### Project Description
Geography Word Scramble is a game that  can be used by school-aged children to have fun while learning iconic landmark locations scattered all over the world
#### Project Purpose
Geography Word Scramble Game is design to enhance geography knowledge, where hints of iconic landmarks are displayed and a corresponding located country is scrambled. It is expected that users  use the hint and scrambled word to identify the correct country where the displayed landmark is located.
Project is generally aimed at improving geography knowledge of users 
#### User Demographic
Primary  user demography are school-age children to improve knowledge of geography hence, attention to details to decipher  the scrambled country name. 
## Design
#### Colour Scheme
#### Topograhy
The Raleway font is used  all through the website. Sans Serif is used as the backup font for any reason the font isn't being imported into the site properly.
#### Imagery
## Features
### Existing Features
#### Title and  Header
Located at the top of the page that clearly states  the game name  and subsequently horn into what game you are playing with world logo appended to it. 
```html

    <title>Geography Word Scramble Game</title>
</head>
<body>
    <h1 class="heading">
        Geography Word Scramble Game
    </h1>
```
![title and header](./assets/readme-images/features-images/header.jpg)
 
#### Word Scrambling
The letters of country names that corresponds with the hint are shuffled. Using the code and to make is simpler for school-aged, the country names are shuffles without omitting any letter.
```js
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(str) {
    let arr = str.split('');           
    let n = arr.length;              
    
    for(let i=0 ; i< n-1 ; ++i) {
      let j = getRandomInt(arr.length);       
      
      let temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;
    } 
    str = arr.join('');                
    return str;                        
  }
```
![shuffle](./assets/readme-images/features-images/scrambleword.jpg)
#### Hint
This is used to display const hint with matches the displayed random shuffled selected country name.
```js
    let index = Math.floor(Math.random() * 41);
    let displayHint = hints[index]; 
    let scrambleWord = document.getElementById("scrambleWord");
     
    displayCountry = country[index]; 
    scrambleWord.innerText = shuffle(displayCountry).toUpperCase();

    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint </b>:" + displayHint;
    document.getElementById("declaration").innerText = "Result:";
```
![hint](./assets/readme-images/features-images/hint.jpg)
#### Imput box
Input box provided for user to type in answer before checking result.
```html
 <div class="form">
    <input id="input" type="text">
 </div>
```
![input-box](./assets/readme-images/features-images/input-box.jpg)
#### Check Answer | Correct and Incorrect Alert
When a user click “check answer” a correct or incorrect answer alert displays depending on user input.
```js
function check() {
    let input = document.getElementById("input");
    let declaration = document.getElementById("declaration");
     
    if (input.value.toLocaleLowerCase().trim() === displayCountry.toLocaleLowerCase()) {
        declaration.innerHTML = "Result: Correct";
        alert("Fantastic, You Got It Right!!");
        incrementScore();
    
    } else{
        declaration.innerHTML = "Result: Incorrect";
        alert(`Hmmm...You answered ${input.value}. The correct answer is ${displayCountry}`);
        incrementWrongAnswer();
    }            
}
```
![correct-answer](./assets/readme-images/features-images/check%20answer-correct.jpg)
![incorrect-answer](./assets/readme-images/features-images/check%20answer-incorrect.jpg)
#### Result
Once “ok” is clicked on the alert correct or incorrect is displayed on the Result tab.
![result](./assets/readme-images/features-images/result.jpg)
#### Score Count
Calculate the total number of correct and incorrect answers as the user progress with the game. 
```js
/**
 * Get the current score from the DOM and increment it by 1
 */
function incrementScore() {

    let initialScore = (document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++initialScore;
}

/**
 * Get the current tally of incorrect answers from the DOM and increment it by 1
 */
function incrementWrongAnswer() {

    let initialScore = (document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++initialScore;
}
```
![score-count](./assets/readme-images/features-images/score-count.jpg)
#### Refresh
This button refreshes and presents new records after answer is checked, ensures the input box is empty and cursor set at input box.
```js
function refresh() {

    // keep input box empty when refresh
    document.getElementById("input").value = " ";

    //Set cursor to input box  when page is loaded- setting the focus
    document.getElementById("input").focus();
     
    //Create random selection of countries with corresponding hints
    let index = Math.floor(Math.random() * 41);
    let displayHint = hints[index]; 
    let scrambleWord = document.getElementById("scrambleWord");
     
    displayCountry = country[index]; 
    scrambleWord.innerText = shuffle(displayCountry).toUpperCase();

    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint </b>:" + displayHint;
    document.getElementById("declaration").innerText = "Result:";
}
```
![refresh](./assets/readme-images/features-images/refresh.jpg)
#### Future features Improvement
## Manual Testing
### Features Testing
### Features Test Result Compilation
### Lighthouse Performance
### Validation Testing
### Browser compatibility
### Screen sizes Responsiveness 
### Pages Responsivnes
### Accessibility
## Technologies Used
### Languages Used
## Bugs
#### Bugs Resolved
#### Bugs Unresolved
### Libraries
## Deployment
## Credits
### Codes
### Tutorials
### Photos
### Text Content