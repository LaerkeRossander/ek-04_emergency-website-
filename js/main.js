const oeverst = document.querySelector("#HotSpotOeverstHoejre");
const under = document.querySelector("#HotSpotUnderTaske");
const nederst = document.querySelector("#HotSpotNederstHoejre");
const overskrift = document.querySelector(".info-text > h2");
const placeholder = document.querySelector(".placeholder");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

/*************** HOTSPOTTET ØVERST TIL HØJRE ****************/
console.log(oeverst);

// efficiency.classList.remove("hide");
// requirement.classList.remove("hide");

oeverst.addEventListener("mouseover", mouseOverOeverst);
oeverst.addEventListener("mouseout", mouseOutOeverst);
oeverst.addEventListener("click", clickOeverst);

/************** når musen rammer hotspot **************/
function mouseOverOeverst() {
  console.log("MouseOverOeverst");
  oeverst.style.fill = "#b4005d";
}

/************** når musen flytter sig fra hotspot **************/

function mouseOutOeverst() {
  console.log("MouseOutOeverst");
  oeverst.style.fill = "#ed1c24";
}

/************** når musen klikker på hotspot **************/

function clickOeverst() {
  console.log("clickOeverst");

  overskrift.textContent = "KOMFORT";
  placeholder.textContent = "Vælg det, der får dig til at tænke mindst muligt på, hvad du har på! Når vi føler os overvældet af valget af tøj, kan det hjælpe at gøre det minimalistisk og neutralt. Det kan være en indikator for, at det ikke var i dag, vi havde overskud nok på kontoen til at eksperimentere. Vi behøver ikke altid at være udtryksfulde, farverige og legende i vores ydre. Nogen gange skal tøjet ikke have værdi, fordi der er andre tanker og følelser der fylder. Så er det hellere den indre garderobe, der skal besøges, frem for det ydre. Derfor kan neutrale farver og enkle styles være gode valg, da de ikke trækker for meget opmærksomhed.";
  efficiency.innerHTML = `<h3>Effektivitet</h3>
  <p>7/10 - da det er vigtigt at føle sig godt tilpas i sit tøj, men altså "beauty is pain", er det ikke det man siger?. </p>`;
  requirement.innerHTML = `<h3>Styrke</h3>
  <p>Det er altid en sejr at kunne komme igennem dagen uden at få vabler på fødderne eller konstant at mærke en halv olfert pga nogle meeeega fede (men aaaalt for stramme jeans)</p>`;

  // Vis info-boksene ved at fjerne hide klassen
  efficiency.classList.remove("hide");
  efficiency.classList.add("fadeIn");
  requirement.classList.remove("hide");
  requirement.classList.add("fadeIn");

  requirement.addEventListener("animationend", cleanup);
}

/*************** HOTSPOTTET UNDER TASKEN ****************/

under.addEventListener("mouseover", mouseOverUnder);
under.addEventListener("mouseout", mouseOutUnder);
under.addEventListener("click", clickUnder);

/************** når musen rammer hotspot **************/
function mouseOverUnder() {
  console.log("MouseOverUnder");
  under.style.fill = "#b4005d";
}

/************** når musen flytter sig fra hotspot **************/

function mouseOutUnder() {
  console.log("MouseOutUnder");
  under.style.fill = "#ed1c24";
}

/************** når musen klikker på hotspot **************/

function clickUnder() {
  console.log("clickUnder");
  overskrift.textContent = "ACCESSORIES";
  placeholder.textContent = "Afled opmærksomheden ved at fokusere dit outfit omkring nogle fede accessories! Hvis du har svært ved at vælge hele outfit, kan du i stedet fokusere på tilbehør som smykker, tasker, bælter eller sko. Det kan være detaljer, som kan ændre hele udtrykket af dit tøj. Hvis du føler dig usikker ved at prøve noget nyt, så afled opmærksomheden med en iøjnefaldende halskæde eller et stykke tøj, som du er tryg ved!";
  efficiency.innerHTML = `<h3>Effektivitet</h3>
  <p>8/10 - fordi ingen bemærker, at du har nattøj på, hvis du har et 'dramatic scarf moment' kørende.</p>`;
  requirement.innerHTML = `<h3>Styrke</h3>
  <p>Accessories er som krydderier – de kan redde hele retten, selv hvis hovedingredienserne halter</p>`;

  // Vis info-boksene ved at fjerne hide klassen
  efficiency.classList.remove("hide");
  efficiency.classList.add("fadeIn");
  requirement.classList.remove("hide");
  requirement.classList.add("fadeIn");
}

requirement.addEventListener("animationend", cleanup);

/*************** HOTSPOTTET NEDERST TIL HØJRE ****************/

nederst.addEventListener("mouseover", mouseOverNederst);
nederst.addEventListener("mouseout", mouseOutNederst);
nederst.addEventListener("click", clickNederst);

/************** når musen rammer hotspot **************/
function mouseOverNederst() {
  console.log("MouseOverNederst");
  nederst.style.fill = "#b4005d";
}

/************** når musen flytter sig fra hotspot **************/
function mouseOutNederst() {
  console.log("MouseOutNederst");
  nederst.style.fill = "#ed1c24";
}

/************** når musen klikker på hotspot **************/

function clickNederst() {
  console.log("clickNederst");
  overskrift.textContent = "ACCEPT";
  placeholder.textContent =
    "Accepter, at det også er okay, at det ikke altid spiller! Vi er kommet til at sætte et pres på mange områder i vores liv, hvor perfekthedskulturen har sneget sig ind. Derfor må vi blive bedre til at bære over med os selv og acceptere, at der nogle gange vil være dage, hvor vi simpelthen bare føler os forkerte i vores uniform og hader vores garderobe. Det er her, vi må genfinde evnen til at omfavne funktionalitet frem for ren æstetik, så vi ikke lader imposter-udyret tage styringenn. I stedet for at lade os diktere af bekymringer om det visuelle, kan vi fokusere på funktionen bag tøjet, der hjælper os med at bevæge os gennem dagen. Vi er alle lækre og unikke skabninger, selvom det kan være svært at finde vores unikke stil, føle os tilpasse vores kroppe og følge med i mode-kapløbet. Selvom vi kan gå rundt og lades som om, at vi har trukket et outfit med lukkede øjne, kan vi allesammen blive skudt af tøjkrisepilen. I det store billede er der vigtigere ting i livet, end hvordan vi er klædt på <33";
  efficiency.innerHTML = `<h3>Effektivitet</h3>
  <p>10/10 - fordi det minder dig om, at tøjkriser ikke kan bekæmpes med flere outfits – kun med mindre selvkritik.</p>`;
  requirement.innerHTML = `<h3>Styrke</h3>
  <p>Hvis dit tøj føles forkert, så husk: det er stadig bedre end ikke at have noget på</p>`;

  // Vis info-boksene ved at fjerne hide klassen
  efficiency.classList.remove("hide");
  efficiency.classList.add("fadeIn");
  requirement.classList.remove("hide");
  requirement.classList.add("fadeIn");
}

requirement.addEventListener("animationend", cleanup);

function cleanup() {
  console.log("cleanup");
  requirement.removeEventListener("animationend", cleanup);
  efficiency.classList.remove("fadeIn");
  requirement.classList.remove("fadeIn");
}
