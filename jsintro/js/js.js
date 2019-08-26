/**
 * file: js.js
 * purpose: interactivity
 **/

//Hvordan virker variabel - string
let hilsen = 'Hej verden -  nu fra en let';
var hej = 'Hej verden -  nu fra en variabel';
const adresse = 'Ringvej Syd 104<br>8260 Viby J.'


// virker mit script?
console.log(adresse);


//tal - skrives uden '' og med . som komma
let aaa = 234;
console.log(aaa * 2);

let bbb = aaa * 777


//Hvad sker der?
let ccc = aaa + hej;
console.log(ccc);


//summen af aaa + bbb = SUM
let ddd = aaa + bbb;
console.log('summen af aaa + bbb er:' + ddd);


// funktion dvs flere rækker af 'instrukser'
let laegSammen = function(tal1, tal2) {
  return tal1 + tal2;
}


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



//sende indhold til din HTML
document.write('<br>Hej verden');



//besked til verden!
console.log('Hello World!');
