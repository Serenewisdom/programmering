// =====================================================================
//  uppgifter.js – HÄR SKRIVER DU DIN KOD
// =====================================================================
//
//  Den här filen innehåller ett antal "ärenden" (som tickets på en
//  arbetsplats). Varje ärende är en funktion som saknar kod.
//
//  Så här fungerar det:
//    - Så länge en funktion är tom returnerar den `undefined`.
//    - Sidan märker det och visar en gul ruta: "🚧 Ärende X – inte byggt".
//    - När din funktion returnerar ett riktigt värde dyker resultatet
//      upp på sidan istället.
//
//  Du behöver bara ändra i den här filen. Allt annat (data.js,
//  app.js, index.html) är redan klart – men läs gärna där också!
//
//  Alla funktioner får arrayen `elever` (från data.js) som parametern
//  `lista`. Använd alltid `lista` inuti funktionen.
//
//  Tips: Öppna konsolen i webbläsaren (F12 -> Console). Där ser du
//  felmeddelanden och allt du skriver ut med console.log().
//
//  Ärendena blir svårare ju längre ner du kommer. Gör dem i ordning.
// =====================================================================



// =====================================================================
//  NIVÅ 1 – Index och length
// =====================================================================


// ---------------------------------------------------------------------
//  ÄRENDE 1 – Antal elever
// ---------------------------------------------------------------------
//  Problem:    Rutan "Antal elever" högst upp ska visa hur många elever
//              som finns i registret.
//  Varför:     Antalet ändras när elever läggs till och tas bort, så
//              det går inte att skriva in en siffra för hand.
//  Checklista:
//    [ ] Funktionen tar emot en array (`lista`)
//    [ ] Returnera antalet element i arrayen (ett tal)
//    [ ] Vilken egenskap har alla arrayer som säger hur långa de är?
// ---------------------------------------------------------------------
function antalElever(lista) {
  return lista.length;
}

// ---------------------------------------------------------------------
//  ÄRENDE 2 – Senast tillagd
// ---------------------------------------------------------------------
//  Problem:    Rutan "Senast tillagd" ska visa den elev som ligger
//              SIST i listan.
//  Varför:     Du vet inte hur lång listan är, och index börjar på 0
//              – så lista[lista.length] fungerar inte. Testa varför!
//  Checklista:
//    [ ] Räkna ut index för sista elementet med hjälp av length
//    [ ] Returnera hela elev-objektet (inte bara namnet)
//    [ ] Extra: vad returneras om listan är tom? Är det ett problem?
// ---------------------------------------------------------------------
function senastTillagd(lista) {
    return lista[lista.length-1];
}


// ---------------------------------------------------------------------
//  ÄRENDE 3 – Rätta ett namn
// ---------------------------------------------------------------------
//  Problem:    I formuläret "Rätta namn" skriver man in en plats i
//              listan (ett index) och ett nytt namn. Eleven på den
//              platsen ska få det nya namnet.
//  Varför:     Ibland blir det stavfel. Vi vill ändra ETT värde utan
//              att bygga om hela listan.
//  Checklista:
//    [ ] Hämta eleven på plats `index` i listan
//    [ ] Ändra elevens `namn` till `nyttNamn`
//    [ ] Returnera eleven du ändrade (så sidan kan visa vem det blev)
//    [ ] Fundera: ändrar detta originalarrayen? (Ja! Varför?)
//    [ ] Extra: vad händer om någon skriver ett index som inte finns?
// ---------------------------------------------------------------------
function rattaNamn(lista, index, nyttNamn) {
  lista[index].namn = nyttNamn
  return lista[index]
}



// =====================================================================
//  NIVÅ 2 – Metoder som ÄNDRAR originalet (muterande)
//  push(), pop(), splice()
// =====================================================================


// ---------------------------------------------------------------------
//  ÄRENDE 4 – Lägg till elev
// ---------------------------------------------------------------------
//  Problem:    När man fyller i formuläret "Ny elev" och klickar
//              "Lägg till" ska eleven hamna sist i listan.
//              (Elev-objektet `nyElev` är redan skapat åt dig i app.js.)
//  Varför:     Nya elever börjar hela tiden. Listan måste kunna växa.
//  Checklista:
//    [ ] Lägg till `nyElev` i slutet av `lista`
//    [ ] Returnera det som metoden returnerar
//    [ ] Ta reda på: vad är det push() returnerar? (Inte arrayen!)
// ---------------------------------------------------------------------
function laggTillElev(lista, nyElev) {
  return lista.push(nyElev);
}


// ---------------------------------------------------------------------
//  ÄRENDE 5 – Ångra senaste
// ---------------------------------------------------------------------
//  Problem:    Knappen "Ångra senaste" ska ta bort den SISTA eleven i
//              listan och visa vem som togs bort.
//  Varför:     Om man råkade lägga till fel elev vill man kunna ångra.
//  Checklista:
//    [ ] Ta bort sista elementet ur `lista`
//    [ ] Returnera eleven som togs bort
//    [ ] Vilken metod tar bort det sista OCH returnerar det?
// ---------------------------------------------------------------------
function angraSenaste(lista) {
  return lista.pop()
}


// ---------------------------------------------------------------------
//  ÄRENDE 6 – Ta bort elev
// ---------------------------------------------------------------------
//  Problem:    Varje rad i tabellen har en "Ta bort"-knapp. När man
//              klickar får funktionen elevens plats i listan (`index`).
//              Eleven på den platsen ska tas bort.
//  Varför:     pop() tar bara bort den sista. Här kan det vara vem
//              som helst – första, sista eller någon mitt i.
//  Checklista:
//    [ ] Ta bort ETT element på plats `index` med splice(start, antal)
//    [ ] Returnera eleven som togs bort
//        (splice returnerar en ARRAY med det borttagna – ta ut [0])
//    [ ] Blanda inte ihop splice och slice! Vad är skillnaden?
// ---------------------------------------------------------------------
function taBortElev(lista, index) {
  return lista.splice(index,1)
}



// =====================================================================
//  NIVÅ 3 – forEach, map och filter
//  forEach gör något med varje element. map och filter skapar NYA
//  arrayer och ändrar INTE originalet.
// =====================================================================


// ---------------------------------------------------------------------
//  ÄRENDE 7 – Logga närvaro
// ---------------------------------------------------------------------
//  Problem:    Knappen "Logga närvaro" ska skriva ut en rad per elev i
//              konsolen, t.ex.  "Anna Lindqvist: 94 %"
//  Varför:     Rektorn vill snabbt kunna se alla siffror. Vi vill göra
//              något med varje elev men behöver ingen ny lista.
//  Checklista:
//    [ ] Gå igenom varje elev i `lista` med forEach
//    [ ] Skriv ut namn och närvaro med console.log
//    [ ] Funktionen behöver inte returnera något
//        (vad returnerar forEach själv? Testa!)
//    [ ] Ta bort console.warn-raden nedan när du är klar
// ---------------------------------------------------------------------
function loggaNarvaro(lista) {
  lista.forEach(elev => console.log(elev.namn, ":", elev.narvaro));
}


// ---------------------------------------------------------------------
//  ÄRENDE 8 – Namnlista
// ---------------------------------------------------------------------
//  Problem:    Rutan "Namnlista" ska visa bara elevernas namn, t.ex.
//              ["Anna Lindqvist", "Erik Johansson", ...]
//  Varför:     Listan ska skrivas ut och sättas upp på dörren. Där ska
//              inte poäng och närvaro synas.
//  Checklista:
//    [ ] Använd map för att göra om varje elev-objekt till ett namn
//    [ ] Returnera den nya arrayen
//    [ ] Kontrollera: är den nya arrayen lika lång som originalet?
// ---------------------------------------------------------------------
function hamtaNamn(lista) {
  lista = lista.map(elev => elev.namn);
  return lista
}


// ---------------------------------------------------------------------
//  ÄRENDE 9 – Bonuspoäng
// ---------------------------------------------------------------------
//  Problem:    När rutan "Visa med bonus (+2)" är ikryssad ska tabellen
//              visa alla elevers poäng + 2. När krysset tas bort ska de
//              riktiga poängen synas igen.
//  Varför:     Vi vill visa ett "tänk om"-läge utan att förstöra de
//              riktiga poängen i registret.
//  Checklista:
//    [ ] Använd map för att skapa en ny array
//    [ ] Returnera ett NYTT objekt för varje elev, där allt är
//        likadant utom poängen:
//          {
//            id:      elev.id,
//            namn:    elev.namn,
//            klass:   elev.klass,
//            poang:   elev.poang + 2,
//            narvaro: elev.narvaro
//          }
//    [ ] VARNING: skriver du `elev.poang = elev.poang + 2` ändrar du
//        originalet! Testa att kryssa i och ur rutan flera gånger –
//        växer poängen hela tiden? Då har du den buggen.
//    [ ] Glöm inte `return` inuti funktionen du skickar till map
// ---------------------------------------------------------------------
function medBonus(lista) {
  // 🚧 DIN KOD HÄR
}


// ---------------------------------------------------------------------
//  ÄRENDE 10 – Filtrera på klass
// ---------------------------------------------------------------------
//  Problem:    Rullistan "Visa klass" ska göra så att tabellen bara
//              visar elever i vald klass.
//              (Om "Alla klasser" är valt anropas inte funktionen.)
//  Varför:     En mentor vill bara se sin egen klass.
//  Checklista:
//    [ ] Använd filter
//    [ ] Villkoret ska bli true när elevens klass är samma som `klass`
//    [ ] Returnera den nya arrayen
// ---------------------------------------------------------------------
function filtreraKlass(lista, klass) {
  // 🚧 DIN KOD HÄR
}


// ---------------------------------------------------------------------
//  ÄRENDE 11 – Varningslista
// ---------------------------------------------------------------------
//  Problem:    Rutan "Låg närvaro" ska visa alla elever som har
//              närvaro UNDER `grans` procent (sidan skickar in 80).
//  Varför:     Skolan måste kontakta hemmet när närvaron är låg.
//  Checklista:
//    [ ] Använd filter
//    [ ] Under 80 – ska det vara < eller <= ?
//    [ ] Returnera den nya arrayen (hela elev-objekten)
//    [ ] Vad händer om ingen elev har låg närvaro?
// ---------------------------------------------------------------------
function lagNarvaro(lista, grans) {
  // 🚧 DIN KOD HÄR
}


// ---------------------------------------------------------------------
//  ÄRENDE 12 – Sök på namn
// ---------------------------------------------------------------------
//  Problem:    När man skriver i sökfältet ska tabellen bara visa
//              elever vars namn innehåller det man skrivit.
//              "an" ska hitta både "Anna" och "Johansson".
//              (Om sökfältet är tomt anropas inte funktionen.)
//  Varför:     Det är jobbigt att leta i en lång lista med ögonen.
//  Checklista:
//    [ ] Använd filter
//    [ ] Strängar har metoden includes():  "Anna".includes("nn") -> true
//    [ ] Stora och små bokstäver: "Anna".includes("an") -> false!
//        Lös det med toLowerCase() på BÅDA sidor
//    [ ] Returnera den nya arrayen
// ---------------------------------------------------------------------
function sokNamn(lista, sokord) {
  // 🚧 DIN KOD HÄR
}



// =====================================================================
//  NIVÅ 4 – Kombinera
// =====================================================================


// ---------------------------------------------------------------------
//  ÄRENDE 13 – Sidindelning
// ---------------------------------------------------------------------
//  Problem:    Tabellen ska bara visa 5 elever åt gången. Knapparna
//              "Föregående" och "Nästa" byter sida.
//              `sida` börjar på 1 (sida 1 = de 5 första eleverna).
//  Varför:     En skola kan ha tusentals elever. Allt på en gång blir
//              oläsligt och långsamt.
//  Checklista:
//    [ ] Använd slice(start, slut) – den ändrar inte originalet
//    [ ] Räkna ut `start` från `sida` och `perSida`.
//        Skriv upp exempel först:
//          sida 1 -> slice(0, 5)
//          sida 2 -> slice(5, 10)
//          sida 3 -> slice(?, ?)
//        Ser du mönstret?
//    [ ] Kom ihåg att `slut` INTE är med i resultatet
//    [ ] Returnera den nya arrayen
// ---------------------------------------------------------------------
function hamtaSida(lista, sida, perSida) {
  // 🚧 DIN KOD HÄR
}


// ---------------------------------------------------------------------
//  ÄRENDE 14 – Allt samtidigt (ingen ny kod – en undersökning)
// ---------------------------------------------------------------------
//  När ärende 9–13 är klara: öppna app.js och leta upp funktionerna
//  `skapaVy()` och `uppdateraTabell()`. Där skickas listan genom dina
//  funktioner, en i taget: klass -> sök -> bonus -> sidindelning.
//
//    [ ] Välj klass 1A, sök "a", kryssa i bonus. Fungerar allt ihop?
//    [ ] Ändrades `elever` av något av det? Skriv console.log(elever)
//        i konsolen och jämför med data.js.
//    [ ] Varför görs sidindelningen SIST? Tänk dig att den gjordes
//        först – vilka elever skulle sökningen då leta bland?
//    [ ] Spelar det någon roll om bonus görs före eller efter filtren?
//        Byt plats på stegen i skapaVy() och testa.
// ---------------------------------------------------------------------
