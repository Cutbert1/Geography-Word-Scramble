// country Array

const country = ["italy", "france", "china", "mexico", "india", "egypy", "peru", "brazil", 
    "greece", "jordan", "germany", "usa", "turkey", "lebanon", "croatia", "tanzania", 
    "argentina", "cambodia", "australia", "spain", "untited arab emirate", "england", 
    "thailand", "ecuador", "zambia", "nepal", "russia", "south africa"];

// hints list Array
const hints = ["Trevi Fountain", "Eiffel Tower", "Great Wall", "Chichen Itza", "Mont-Saint Michel", "Taj Mahal",
     "Colosseum", "Pyramids of Giza", "Machu Picchu", "Christ the Redeemer", "Acropolis", "Petra", "The Brandenburg Gate", 
     "The Golden Gate Bridge", "The Blue Mosque", "Baalbek", "Plitvice Lakes National Park", "Kilimanjaro", "Perito Moreno Glacier", 
     "Angkor Wat Temple Complex", "Great Barrier Reef", "Sagrada Familia", "Burj Khalifa", "Sydney Opera House", "Big Ben", "The Grand Palace", 
     "The Galapagos Islands", "Serengeti National Park", "Victoria Falls", "Mount Everest", "Red Square", "Table Mountain"];

// Initialize display country with empty string
let displayCountry = " ";

// Call function to shuffle letters
function shuffle(string) {
    stringArray = Array.from(string)
    for (let i = 0; i < strArray.length - 1; ++i);{
        let j = Math.floor(Math.random() * stringArray.length);

    // Switch letters
    let temp = stringArray[i];
    stringArray[i] = stringArray[j]; 
        stringArray[j] = temp;

    }
    return stringArray.join(" ");

}

// Function to check input and display result
function check() {
    let input = document.getElementById("input");
    let declaration = document.getElementById("declaration");
    if (input.value.toLocaleLowerCase() === displayCountry.toLocaleLowerCase()
    )
        declaration.innerHTML = "Result: Correct";
    else output.innerHTML = "Result: Incorrect";
}