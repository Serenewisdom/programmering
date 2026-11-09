// =====================================================================
//  data.js – Skolans elevregister
// =====================================================================
//
//  Här ligger all data som systemet arbetar med.
//
//  `elever` är en ARRAY (en ordnad lista). Varje element i arrayen är
//  ett OBJEKT som beskriver en elev. Alla elev-objekt ser likadana ut:
//
//    {
//      id:      1,        // unikt nummer – två elever har aldrig samma id
//      namn:    "Anna",   // elevens namn (text)
//      klass:   "1A",     // vilken klass eleven går i (text)
//      poang:   22,       // provpoäng, 0–30. 15 eller mer = godkänd
//      narvaro: 94        // närvaro i procent, 0–100
//    }
//
//  Kom ihåg: index börjar på 0!
//    elever[0]                  -> första eleven (Anna)
//    elever[elever.length - 1]  -> sista eleven
//
//  Du får gärna lägga till fler elever här för att testa.
// =====================================================================

const elever = [
  { id: 1,  namn: "Anna Lindqvist",     klass: "1A", poang: 22, narvaro: 94 },
  { id: 2,  namn: "Erik Johansson",     klass: "1A", poang: 14, narvaro: 71 },
  { id: 3,  namn: "Sara Ahmed",         klass: "1B", poang: 28, narvaro: 98 },
  { id: 4,  namn: "Oskar Berg",         klass: "2A", poang: 9,  narvaro: 62 },
  { id: 5,  namn: "Lina Nguyen",        klass: "1B", poang: 19, narvaro: 88 },
  { id: 6,  namn: "Ali Hassan",         klass: "2A", poang: 25, narvaro: 91 },
  { id: 7,  namn: "Maja Svensson",      klass: "1A", poang: 17, narvaro: 79 },
  { id: 8,  namn: "Viktor Holm",        klass: "2B", poang: 12, narvaro: 85 },
  { id: 9,  namn: "Elsa Karlsson",      klass: "2B", poang: 30, narvaro: 100 },
  { id: 10, namn: "Noah Petersson",     klass: "1B", poang: 15, narvaro: 76 },
  { id: 11, namn: "Fatima Yilmaz",      klass: "2A", poang: 21, narvaro: 93 },
  { id: 12, namn: "Hugo Andersson",     klass: "1A", poang: 6,  narvaro: 55 },
  { id: 13, namn: "Wilma Eriksson",     klass: "2B", poang: 24, narvaro: 90 },
  { id: 14, namn: "Liam Öberg",         klass: "1B", poang: 11, narvaro: 82 },
  { id: 15, namn: "Ella Åström",        klass: "2A", poang: 27, narvaro: 97 },
  { id: 16, namn: "Adam Nilsson",       klass: "1A", poang: 18, narvaro: 68 },
  { id: 17, namn: "Alva Mohammed",      klass: "2B", poang: 20, narvaro: 87 },
  { id: 18, namn: "William Larsson",    klass: "1B", poang: 8,  narvaro: 74 },
  { id: 19, namn: "Saga Persson",       klass: "2A", poang: 16, narvaro: 81 },
  { id: 20, namn: "Leo Gustafsson",     klass: "1A", poang: 23, narvaro: 95 },
  { id: 21, namn: "Ebba Jonsson",       klass: "2B", poang: 13, narvaro: 77 },
  { id: 22, namn: "Omar Ali",           klass: "1B", poang: 26, narvaro: 92 },
  { id: 23, namn: "Alice Olsson",       klass: "2A", poang: 10, narvaro: 66 },
  { id: 24, namn: "Elias Lund",         klass: "1A", poang: 29, narvaro: 99 },
  { id: 25, namn: "Freja Mattsson",     klass: "2B", poang: 15, narvaro: 84 },
  { id: 26, namn: "Theo Ström",         klass: "1B", poang: 7,  narvaro: 59 },
  { id: 27, namn: "Selma Sandberg",     klass: "2A", poang: 22, narvaro: 89 },
  { id: 28, namn: "Lucas Bergström",    klass: "1A", poang: 19, narvaro: 83 },
  { id: 29, namn: "Nora Ekström",       klass: "2B", poang: 25, narvaro: 96 },
  { id: 30, namn: "Isak Hedlund",       klass: "1B", poang: 12, narvaro: 72 },
];

