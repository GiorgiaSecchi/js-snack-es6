//# Snack 1
//* Creare un array di oggetti:
//
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// ***********************************************************************************************/

const racingBike = [
  {
    name: "Ciclocross",
    weight: 9,
  },
  {
    name: "Ebike",
    weight: 12,
  },
  {
    name: "Gravel",
    weight: 10,
  },
  {
    name: "Endurance",
    weight: 8,
  },
  {
    name: "Aeroad",
    weight: 7,
  },
];

// console.log(racingBike[4]);

let lightBike = racingBike[0];

racingBike.forEach((bike) => {
  if (bike.weight < lightBike.weight) {
    lightBike = bike;
  }
});

console.log(
  `Bici più leggera: ${lightBike.name} ha un peso di ${lightBike.weight} kg`
);
