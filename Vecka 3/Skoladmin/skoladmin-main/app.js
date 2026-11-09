// =====================================================================
//  app.js – kopplar ihop sidan med dina funktioner
// =====================================================================
//
//  Den här filen är redan klar. Du behöver inte ändra något här
//  (förutom i ärende 14). Men läs gärna – allt är förklarat!
//
//  Filen gör tre saker:
//    1. Hjälpfunktioner som skriver text i rutorna på sidan
//    2. Funktioner som uppdaterar rutorna (de anropar DINA funktioner)
//    3. Funktioner som körs när man klickar på knappar
//
//  Hur vet sidan om ett ärende är byggt?
//    En tom funktion returnerar alltid `undefined`. Så om din funktion
//    returnerar `undefined` visar vi en gul "inte byggt"-ruta istället.
// =====================================================================


// Vilken sida av tabellen vi visar just nu (ärende 13)
let aktuellSida = 1;

// Hur många elever som ska visas per sida (ärende 13)
let perSida = 5;

// Nästa lediga id för en ny elev. Ökar med 1 varje gång.
let nastaId = 31;



// =====================================================================
//  1. HJÄLPFUNKTIONER – skriver saker på sidan
// =====================================================================

// Skriver in HTML-text i rutan med ett visst id.
function visa(rutaId, html) {
  document.getElementById(rutaId).innerHTML = html;
}

// Visar den gula "inte byggt"-rutan.
function visaInteByggt(rutaId, nummer) {
  visa(rutaId, '<p class="inte-byggt">🚧 Ärende ' + nummer + ' är inte byggt ännu</p>');
}

// Visar ett kort meddelande högst upp på sidan.
function visaMeddelande(text) {
  visa("ruta-meddelande", text);
}

// Letar upp på vilken plats (index) i `elever` som eleven med ett visst
// id ligger. Returnerar -1 om eleven inte finns.
function hittaIndex(id) {
  for (let i = 0; i < elever.length; i++) {
    if (elever[i].id === id) {
      return i;
    }
  }
  return -1;
}



// =====================================================================
//  2. UPPDATERA RUTORNA
// =====================================================================

// Ärende 1 – Antal elever
function uppdateraAntal() {
  const antal = antalElever(elever);

  if (antal === undefined) {
    visaInteByggt("ruta-antal", 1);
  } else {
    visa("ruta-antal", '<p class="stor-siffra">' + antal + '</p>');
  }
}


// Ärende 2 – Senast tillagd
function uppdateraSenast() {
  const elev = senastTillagd(elever);

  if (elev === undefined) {
    visaInteByggt("ruta-senast", 2);
  } else {
    visa("ruta-senast", '<p class="stor-text">' + elev.namn + '</p><p>Klass ' + elev.klass + '</p>');
  }
}


// Ärende 11 – Låg närvaro
function uppdateraVarning() {
  const varningar = lagNarvaro(elever, 80);

  if (varningar === undefined) {
    visaInteByggt("ruta-varning", 11);
    return;
  }

  if (varningar.length === 0) {
    visa("ruta-varning", "<p>Inga elever har låg närvaro 🎉</p>");
    return;
  }

  // Bygg en punktlista, en rad per elev
  let html = "<ul>";
  varningar.forEach(function (elev) {
    html = html + "<li>" + elev.namn + " – " + elev.narvaro + " %</li>";
  });
  html = html + "</ul>";

  visa("ruta-varning", html);
}


// ---------------------------------------------------------------------
//  skapaVy() – bestämmer VILKA elever tabellen ska visa
// ---------------------------------------------------------------------
//  Vi börjar med alla elever och skickar listan genom dina funktioner,
//  en i taget, som ett löpband:
//
//    alla elever -> klass-filter -> sökning -> bonus -> (sidindelning)
//
//  Om ett ärende inte är byggt hoppar vi bara över det steget.
//
//  ÄRENDE 14: Här får du gärna experimentera med ordningen!
// ---------------------------------------------------------------------
function skapaVy() {
  let vy = elever;
  let inteByggda = "";

  // Steg 1: klass (ärende 10)
  const valdKlass = document.getElementById("val-klass").value;
  if (valdKlass !== "alla") {
    const resultat = filtreraKlass(vy, valdKlass);
    if (resultat === undefined) {
      inteByggda = inteByggda + "Ärende 10 (klass) ";
    } else {
      vy = resultat;
    }
  }

  // Steg 2: sökning (ärende 12)
  const sokord = document.getElementById("val-sok").value;
  if (sokord !== "") {
    const resultat = sokNamn(vy, sokord);
    if (resultat === undefined) {
      inteByggda = inteByggda + "Ärende 12 (sök) ";
    } else {
      vy = resultat;
    }
  }

  // Steg 3: bonus (ärende 9)
  const bonusIkryssad = document.getElementById("val-bonus").checked;
  if (bonusIkryssad) {
    const resultat = medBonus(vy);
    if (resultat === undefined) {
      inteByggda = inteByggda + "Ärende 9 (bonus) ";
    } else {
      vy = resultat;
    }
  }

  // Visa vilka filter som inte fungerar än
  if (inteByggda === "") {
    visa("ruta-filterstatus", "");
  } else {
    visa("ruta-filterstatus", '<p class="inte-byggt">🚧 Filtret fungerar inte än: ' + inteByggda + '</p>');
  }

  return vy;
}


// Ritar upp tabellen
function uppdateraTabell() {
  const vy = skapaVy();

  // Om listan blivit kortare (t.ex. efter "Ta bort") kan vi stå på en
  // sida som inte finns längre. Gå då till sista sidan som finns.
  const antalSidorNu = Math.ceil(vy.length / perSida);
  if (aktuellSida > antalSidorNu && antalSidorNu > 0) {
    aktuellSida = antalSidorNu;
  }

  // Steg 4: sidindelning (ärende 13)
  let raderAttVisa = hamtaSida(vy, aktuellSida, perSida);

  if (raderAttVisa === undefined) {
    // Inte byggt – visa alla rader istället
    raderAttVisa = vy;
    visaInteByggt("ruta-sida", 13);
  } else {
    const antalSidor = Math.ceil(vy.length / perSida);
    visa("ruta-sida", "Sida " + aktuellSida + " av " + antalSidor);
  }

  // Inga elever att visa?
  if (raderAttVisa.length === 0) {
    visa("tabell", '<tr><td colspan="7">Inga elever att visa</td></tr>');
    return;
  }

  // Bygg en tabellrad (<tr>) per elev
  let html = "";
  raderAttVisa.forEach(function (elev) {
    const index = hittaIndex(elev.id);

    // Röd siffra om eleven inte är godkänd (under 15 poäng)
    let poangKlass = "";
    if (elev.poang < 15) {
      poangKlass = "underkand";
    }

    html = html + "<tr>";
    html = html + "<td>" + index + "</td>";
    html = html + "<td>" + elev.id + "</td>";
    html = html + "<td>" + elev.namn + "</td>";
    html = html + "<td>" + elev.klass + "</td>";
    html = html + '<td class="' + poangKlass + '">' + elev.poang + "</td>";
    html = html + "<td>" + elev.narvaro + " %</td>";
    html = html + '<td><button class="ta-bort" onclick="klickTaBort(' + elev.id + ')">Ta bort</button></td>';
    html = html + "</tr>";
  });

  visa("tabell", html);
}


// Uppdaterar ALLA rutor. Körs när sidan laddas och efter varje ändring.
function uppdateraAllt() {
  uppdateraAntal();
  uppdateraSenast();
  uppdateraVarning();
  uppdateraTabell();
}



// =====================================================================
//  3. KNAPPAR – körs när man klickar (se onclick i index.html)
// =====================================================================

// Ärende 4 – "Lägg till"
function klickLaggTill() {
  const namn = document.getElementById("input-namn").value;
  if (namn === "") {
    visaMeddelande("Skriv ett namn först.");
    return;
  }

  // Skapa ett nytt elev-objekt från fälten i formuläret.
  // Number() gör om text till ett tal: "15" -> 15
  const nyElev = {
    id: nastaId,
    namn: namn,
    klass: document.getElementById("input-klass").value,
    poang: Number(document.getElementById("input-poang").value),
    narvaro: Number(document.getElementById("input-narvaro").value)
  };

  const resultat = laggTillElev(elever, nyElev);

  if (resultat === undefined) {
    visaMeddelande("🚧 Ärende 4 är inte byggt ännu");
  } else {
    nastaId = nastaId + 1;
    document.getElementById("input-namn").value = "";
    visaMeddelande(nyElev.namn + " lades till.");
  }

  uppdateraAllt();
}


// Ärende 5 – "Ångra senaste"
function klickAngra() {
  const borttagen = angraSenaste(elever);

  if (borttagen === undefined) {
    visaMeddelande("🚧 Ärende 5 är inte byggt ännu");
  } else {
    visaMeddelande(borttagen.namn + " togs bort.");
  }

  uppdateraAllt();
}


// Ärende 3 – "Spara" i Rätta namn
function klickRatta() {
  const index = Number(document.getElementById("input-ratta-index").value);
  const nyttNamn = document.getElementById("input-ratta-namn").value;

  const andradElev = rattaNamn(elever, index, nyttNamn);

  if (andradElev === undefined) {
    visaMeddelande("🚧 Ärende 3 är inte byggt ännu");
  } else {
    visaMeddelande("Eleven med id " + andradElev.id + " heter nu " + andradElev.namn + ".");
  }

  uppdateraAllt();
}


// Ärende 6 – "Ta bort" på en rad i tabellen
function klickTaBort(id) {
  const index = hittaIndex(id);
  const borttagen = taBortElev(elever, index);

  if (borttagen === undefined) {
    visaMeddelande("🚧 Ärende 6 är inte byggt ännu");
  } else {
    visaMeddelande(borttagen.namn + " togs bort.");
  }

  uppdateraAllt();
}


// Ärende 7 – "Logga närvaro"
function klickLogga() {
  loggaNarvaro(elever);
  visaMeddelande("Titta i konsolen (F12 -> Console).");
}


// Ärende 8 – "Skapa namnlista"
function klickNamnlista() {
  const namnen = hamtaNamn(elever);

  if (namnen === undefined) {
    visaInteByggt("ruta-namnlista", 8);
    return;
  }

  let html = "<ol>";
  namnen.forEach(function (namn) {
    html = html + "<li>" + namn + "</li>";
  });
  html = html + "</ol>";

  visa("ruta-namnlista", html);
}


// Ärende 13 – "Föregående"
function klickForegaende() {
  if (aktuellSida > 1) {
    aktuellSida = aktuellSida - 1;
  }
  uppdateraTabell();
}


// Ärende 13 – "Nästa"
function klickNasta() {
  const antalSidor = Math.ceil(skapaVy().length / perSida);
  if (aktuellSida < antalSidor) {
    aktuellSida = aktuellSida + 1;
  }
  uppdateraTabell();
}


// Körs när man ändrar klass, sökord eller bonus.
// Vi hoppar tillbaka till sida 1, annars kan man hamna på en sida
// som inte finns längre.
function filterAndrat() {
  aktuellSida = 1;
  uppdateraTabell();
}



// =====================================================================
//  START – körs en gång när sidan laddas
// =====================================================================
uppdateraAllt();

