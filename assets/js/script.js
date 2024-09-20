// country Array
const country = ["Japan", "Italy", "Namibia", "France", "China", "Mexico", "India", "Bolivia", "Pakistan", "Egypt", "Peru", "Brazil", "Morocco", "South Korea",
    "Greece", "Jordan", "Germany", "French Guiana", "United States of America", "Kenya", "Turkey", "Lebanon", "Croatia", "Tanzania", "Slovenia", "Sri Lanka",
    "Argentina", "Cambodia", "Australia", "Spain", "Untited Arab Emirate", "England", "Austria", "Iceland", "Philippines", "Czech Republic", "Guyana", "Bhutan",
    "Thailand", "Ecuador", "Zambia", "Nepal", "Russia", "South Africa", "Portugal", "Chile", "Venezuela", "Singapore", "Netherlands", "Sweden", "Albania", "Tibet", "Romania",
    "Canada", "Vietnam", "Hong Kong", "Botswana", "Taiwan", "Irland", "Turqmenistan", "Malaysia", "Switzerland", "Myanmar", "Scotland", "Indonesia", 
    "Belguim", "Madagascar", "Colombia", "Suriname", "Kazakhstan", "Iran"
];

// hints  Array
const hints = ["Fushimi Inari Taisha", "Colosseum", "Fish River Canyon", "Eiffel Tower", "Great Wall", "Chichen Itza", "Taj Mahal", "Lake Titicaca", "Badshahi Mosque",
    "Pyramids of Giza", "Machu Picchu", "Christ the Redeemer", "Sahara Desert", "Gyeongbokgung Palace", "Acropolis", "Petra", "The Brandenburg Gate", "Salvation Islands",
    "The Golden Gate Bridge", "Masai Mara National Park", "The Blue Mosque", "Baalbek", "Plitvice Lakes National Park", "Kilimanjaro", "Lake Bled", "Sigiriya Lion Rock", 
    "Perito Moreno Glacier","Angkor Wat Temple Complex", "Great Barrier Reef", "Sagrada Familia", "Burj Khalifa", "Big Ben", "Schönbrunn Palace", "Sun Voyager", 
    "The Chocolate Hills", "Prague Castle", "Kaieteur National Park", "Tiger Nest", "The Grand Palace", "The Galapagos Islands", "Victoria Falls", "Mount Everest", "Red Square", 
    "Table Mountain", "Dom Luis Bridge", "Easter Island", "Angel Falls", "Gardens by the Bay", "Anne Frank House", "Gamla Stan", "Pyramid of Tirana", "Potala Palace",
    "Fortified Churches of Transylvania", "Niagara Falls", "Ha Long Bay", "Tian Tan Buddha", "Makgadikgadi Pans", "Taipei 101", "Cliffs of Moher", "Darvaza Gas Crater",
    "Petronas Twin Towers", "Chapel Bridge", "Shwedagon Pagoda", "Edinburgh Castle", "Mount Bromo", "Atomium", "Avenue of the Baobabs", "Cartagena", "Fort Zeelandia", 
    "Baiterek Monument", "Shah Mosque"
];

// Initialize display country with empty string
let displayCountry = " ";

// Shuffle letters Function
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

function shuffle(str) {
    let array = str.split("");
    let n = array.length;

    for (let i = 0; i < n - 1; ++i) {
        let j = getRandomInt(array.length);

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    str = array.join("");
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

    } else {
        declaration.innerHTML = "Result: Incorrect";
        alert(`Hmmm...You answered ${input.value}. The correct answer is ${displayCountry}`);
        incrementIncorrectAnswer(); 
    }
       
}


// Event listener for keydown Enter
document.getElementById("input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
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
    let index = Math.floor(Math.random() * 71);
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