/**
 * file: js.js
 * purpose: interactivity
 **/

//Hvordan virker variabel - string
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Butikken er desværre lukket, kom igen snart!';
} else if (hourNow > 10) {
    greeting = 'Butikken er åben!';
} else if (hourNow > 09) {
    greeting = 'Åbner snart!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');


//Beregne BMI
function bmi(h, v) {
  dinBmi = Math.floor((v / (h * h)));
  //  document.write('Her er din BMI: ' + dinBmi);
  document.getElementById('content').innerHTML = '<strong>Her er din BMI: </strong>'
  + dinBmi;
  document.getElementById('content').style.color ='blue';
  document.getElementById('content').style.fontSize ='30px';
}
bmi(1.75, 63);


//At vise et billede i HTML'en
function VisBillede (billede){
  document.getElementById('billede').innerHTML += '<img src="images/'
  +billede
  +'"alt="Fed mand">';
}
VisBillede('fede.png');


//lettere måde at sætte billedet ind på - Lister:
//Her er en liste:
var billeder = [
  "ko.png",
  "hund.png",
  "gorilla.png",
  "giraf.png"
];

//arrays virker sådan (tæller fra 0 og ikke 1)
console.log(billeder);
//console.log(billeder[2]); //viser det 3. billede i listen


//et for loop
/*for (var i = 0; i < 10; i++) {
  console.log( "Jeg skal opføre mig ordenligt!" );
}
*/


// et andet loop
for (var i = 0; i < billeder.length; i++) {
//  console.log( billeder [i]);
VisBillede( billeder [i] )
};
