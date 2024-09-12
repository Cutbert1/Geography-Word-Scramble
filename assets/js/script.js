// country Array

const word = ["italy", "france", "china", "mexico", "india", "egypy", "peru", "brazil", 
    "greece", "jordan", "germany", "united states of america", "turkey", "lebanon", "croatia", "tanzania", 
    "argentina", "cambodia", "australia", "spain", "untited arab emirate", "england", 
    "thailand", "ecuador", "zambia", "nepal", "russia", "south africa"];

// hints list Array
const hints = ["Colosseum", "Eiffel Tower", "Great Wall", "Chichen Itza", "Mont-Saint Michel", "Taj Mahal",
     , "Pyramids of Giza", "Machu Picchu", "Christ the Redeemer", "Acropolis", "Petra", "The Brandenburg Gate", 
     "The Golden Gate Bridge", "The Blue Mosque", "Baalbek", "Plitvice Lakes National Park", "Kilimanjaro", "Perito Moreno Glacier", 
     "Angkor Wat Temple Complex", "Great Barrier Reef", "Sagrada Familia", "Burj Khalifa", "Sydney Opera House", "Big Ben", "The Grand Palace", 
     "The Galapagos Islands", "Serengeti National Park", "Victoria Falls", "Mount Everest", "Red Square", "Table Mountain"];

// Initialize display country with empty string
let displayWord = " ";

// Call function to shuffle letters
function shuffle(str) {
    strArray = Array.from(str)
    for (let i = 0; i < strArray.length - 1; ++i); {
        let j = Math.floor(Math.random() * strArray.length);

    // Switch letters
    var i
    let temp = strArray[i];
    strArray[i] = strArray[j]; 
        strArray[j] = temp;

    }
    return strArray.join(" ");

}

// Function to check input and display result
function check() {
    let input = document.getElementById("input");
    let declaration = document.getElementById("declaration");
    if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase()
    )
        declaration.innerHTML = "Result: Correct";
    else declaration.innerHTML = "Result: Incorrect";
}

//Refresh and show new record
function refresh() {
    index = Math.floor(Math.random() * 32); 
    displayWord = word[index]; 
    displayHint = hints[index]; 
    scrambleWord = document.getElementById("scrambleWord");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();

    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint</b>:" + displayHint;
    document.getElementById("declaration").innerText = "Result:";

}

// Function call when page load for first time 
refresh();