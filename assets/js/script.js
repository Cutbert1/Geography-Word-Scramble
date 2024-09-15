
// country Array

const country = ["japan", "italy", "france", "china", "mexico", "india", "egypt", "peru", "brazil", 
    "greece", "jordan", "germany", "united states of america", "turkey", "lebanon", "croatia", "tanzania", 
    "argentina", "cambodia", "australia", "spain", "untited arab emirate", "england", 
    "thailand", "ecuador", "zambia", "nepal", "russia", "south africa", "portugal", "Singapore", 
    "canada", "vietnam", "hong kong", "taiwan", "irland", "malaysia", "switzerland", "scotland", "indonesia", "belguim"];

// hints  Array
const hints = ["Fushimi Inari Taisha", "Colosseum", "Eiffel Tower", "Great Wall", "Chichen Itza", "Taj Mahal",
     "Pyramids of Giza", "Machu Picchu", "Christ the Redeemer", "Acropolis", "Petra", "The Brandenburg Gate", 
     "The Golden Gate Bridge", "The Blue Mosque", "Baalbek", "Plitvice Lakes National Park", "Kilimanjaro", "Perito Moreno Glacier", 
     "Angkor Wat Temple Complex", "Great Barrier Reef", "Sagrada Familia", "Burj Khalifa", "Big Ben", "The Grand Palace", 
     "The Galapagos Islands", "Victoria Falls", "Mount Everest", "Red Square", "Table Mountain", "Dom Luis Bridge", 
     "Gardens by the Bay", "Niagara Falls" ,"Ha Long Bay", "Tian Tan Buddha", "Taipei 101", "Cliffs of Moher", 
     "Petronas Twin Towers", "Chapel Bridge", "Edinburgh Castle", "Mount Bromo", "Atomium"];

// Initialize display country with empty string
let displayCountry = " ";

// Shuffle letters Function
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
  

// Function to check input and display result
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
        incrementIncorrectAnswer();
    } 
            
}
// Event listener for keydown Enter
document.getElementById("input").addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        check();
    }
});

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
function incrementIncorrectAnswer() {

    let initialScore = (document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++initialScore;

}


//Refresh and show new record
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

// Function call when page load for first time 
refresh();