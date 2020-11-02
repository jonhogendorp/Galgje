var lettersArray = ["spaans", "grieks", "duits", "frans", "frysk", "nederlands","italiaans", "engels", "deens", "zweeds", "noors", "portugees", "fins", "russisch", "chinees", "hongaars", "pools", "tsjechie", "roemeens", "turks", "bulgaars", "armeens", "farsi", "japans", "koreaans", "thais", "indonesisch", "arabisch", "sloveens", "hebreeuws", "baskisch", "albanees", "hindi","mandarijn","bengaals","vietnamees","maleis", "oekraiens", "sanskriet", "latijn ","swahili", "bretons", "welsch", "cornisch", "welsch", "iers", "schots","ijslands", "luxemburgs", "afrikaans", "catalaans", "slowaaks", "romansch", "servisch", "bosnisch", "kroatisch", "macedonisch", "sardijns", "occitaans" ];
var galgPics = ["Images/hangman1.png","Images/hangman2.png","Images/hangman3.png","Images/hangman4.png","Images/hangman5.png","Images/hangman6.png","Images/hangman7.png","Images/hangman8.png","Images/hangman9.png" ];
var wrongLetters = []; 
var lives = 9;
var solution ;
var letter ;
var wordLine = [];

// willekeurige letter
function randomLetter(){
      solution = lettersArray[Math.floor(Math.random() * lettersArray.length)]; 
    };
    
// letters op een rij
function showSolution(){
    randomLetter()
    wordLine = solution.split(""); 
    for(var i = 0; i < wordLine.length; i++ ){
        wordLine[i] = " _ ";
    };
    document.querySelector("#solution").innerHTML = wordLine.join(" ");  
}
showSolution();
// console.log(solution)

//knop gelinkt aan input
var guessButton = document.getElementById("checkGuess");
guessButton.addEventListener("click", inputWord);

// waarde ingevoerde letter 
function inputWord(){
        letter = document.getElementById("guessLetter").value;
        if(!letter.match(/[a-z]/)){
            return false;
        } 
        // console.log(letter)        
        // console.log(wrongLetters)
    // is deze letter al een keer gekozen 
    if (wrongLetters.lastIndexOf(letter) !== -1 ){
        // console.log("double");
        alert("Deze letter heb je al ingevoerd")
        return;
    } 

    // controleren of letter goed is 
    var correctLetter = false;
    for(var i = 0; i < solution.length; i++){
        if(solution.toUpperCase()[i] === letter.toUpperCase()){
         correctLetter = true;
         wordLine[i] = letter;
         document.getElementById("solution").innerHTML = wordLine.join(" "); 

        //winconditie
        // console.log(wordLine.join(""))
            if(wordLine.join("") === solution){
            document.querySelector("#winner").innerHTML = "Je hebt het goed geraden"
            // disable inputfield
            document.querySelector("#guessLetter").disabled = true;
            }
        }
    }
        //foute letter
    if (!correctLetter){
        lives--;
        document.getElementById("lives").innerHTML = lives; 
        document.getElementById("galg").src = galgPics[wrongLetters.length]; 
        wrongLetters.push(letter);
        document.getElementById("chosenLetters").innerHTML = wrongLetters.join(" ");
        if(lives < 1){
            console.log("you lost")
             document.getElementById("lost").innerHTML = "Je hebt verloren het goede woord was " + solution + "."
          
            
        }
    }
    document.getElementById("guessLetter").value = "";
}
   // opnieuw beginnen
    function reset(){
        location.reload();
        showSolution();
    }

    