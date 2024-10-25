//# Snack 2
//* Creare un array di oggetti di squadre di calcio.
//
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// ***********************************************************************************************/

const squadre = [
  {
    nome: "Squadra A",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Squadra B",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Squadra C",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Squadra D",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Squadra E",
    punti: 0,
    falli: 0,
  },
];

// per ogni "squadra" all'interno genero numeri casuali per le proprietà punti e falli
squadre.forEach((squadra) => {
  squadra.punti = Math.floor(Math.random() * 21);
  squadra.falli = Math.floor(Math.random() * 11);
});
console.log(squadre);

//creo nuovo array squadre che restituisca solo le due proprietà
const newArrSquadre = squadre.map((squadra) => {
  return { nome: squadra.nome, falli: squadra.falli };
});

console.log(newArrSquadre);
