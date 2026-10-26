const custom = [
  { name: "Mia", isVIP: true, buySum: 1200 },
  { name: "Sam", isVIP: false, buySum: 450 },
  { name: "Robin", isVIP: true, buySum: 800 },
];

const getVIPbonus = (custom) => {
  const result = [];

  for (const item of custom) {
    if (item.isVIP === true) {
      const newSum = item.buySum * 0.9;
      result.push({name: item.name, newPrice: newSum});
    }
  }

  return result;
};

const deals = getVIPbonus(custom);
console.log(deals);