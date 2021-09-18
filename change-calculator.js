// CALCULATE CHANGE CALCULATOR

function calculateChange(amount, money) {
  let change = money - amount;
  let changeToBePaid = Math.floor(change / 100) * 100;

  if (change > 0) {
    console.log(
      `\nKembalian yang harus diberikan kasir Rp. ${change} \ndibulatkan menjadi Rp. ${changeToBePaid}`
    );
  } else {
    console.log("\nMaaf, kurang bayar!");
  }

  let calculateSeratusRibu = Math.floor(changeToBePaid / 100000);
  if (calculateSeratusRibu === 0) {
  } else {
    console.log(`${calculateSeratusRibu} lembar 100000`);
  }
  let changeRemaining = changeToBePaid % 100000;

  let calculateLimapuluhRibu = Math.floor(changeRemaining / 50000);
  if (calculateLimapuluhRibu === 0) {
  } else {
    console.log(`${calculateLimapuluhRibu} lembar 50000`);
  }
  changeRemaining = changeRemaining % 50000;

  let calculateDuaPuluhRibu = Math.floor(changeRemaining / 20000);
  if (calculateDuaPuluhRibu === 0) {
  } else {
    console.log(`${calculateDuaPuluhRibu} lembar 20000`);
  }
  changeRemaining = changeRemaining % 20000;

  let calculateSepuluhRibu = Math.floor(changeRemaining / 10000);
  if (calculateSepuluhRibu === 0) {
  } else {
    console.log(`${calculateSepuluhRibu} lembar 10000`);
  }
  changeRemaining = changeRemaining % 10000;

  let calculateLimaRibu = Math.floor(changeRemaining / 5000);
  if (calculateLimaRibu === 0) {
  } else {
    console.log(`${calculateLimaRibu} lembar 5000`);
  }
  changeRemaining = changeRemaining % 5000;

  let calculateDuaRibu = Math.floor(changeRemaining / 2000);
  if (calculateDuaRibu === 0) {
  } else {
    console.log(`${calculateDuaRibu} lembar 2000`);
  }
  changeRemaining = changeRemaining % 2000;

  let calculateSeribu = Math.floor(changeRemaining / 1000);
  if (calculateSeribu === 0) {
  } else {
    console.log(`${calculateSeribu} koin 1000`);
  }
  changeRemaining = changeRemaining % 1000;

  let calculateLimaRatus = Math.floor(changeRemaining / 500);
  if (calculateLimaRatus === 0) {
  } else {
    console.log(`${calculateLimaRatus} koin 500`);
  }
  changeRemaining = changeRemaining % 500;

  let calculateDuaRatus = Math.floor(changeRemaining / 200);
  if (calculateDuaRatus === 0) {
  } else {
    console.log(`${calculateDuaRatus} koin 200`);
  }
  changeRemaining = changeRemaining % 200;

  let calculateSeratus = Math.floor(changeRemaining / 100);
  if (calculateSeratus === 0) {
  } else {
    console.log(`${calculateSeratus} koin 100`);
  }
  changeRemaining = changeRemaining % 100;
}

calculateChange(2921, 122000);

// =====================================================================================================

/*

const calculateChange = function (price, cash) {
  let returnValue = cash - price;
  let change = {};

  const billTypes = [
    "100000",
    "50000",
    "20000",
    "10000",
    "5000",
    "1000",
    "500",
    "200",
    "100",
  ];

  let billValues = [
    100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
  ];

  let amount;

  for (let i = 0; i < billValues.length; i++) {
    amount = Math.floor(returnValue / billValues[i]);
    console.log(amount);
    if (amount > 0) {
      change[billTypes[i]] = amount;
      console.log(change);
      returnValue = returnValue % billValues[i];
      console.log(returnValue);
    }
  }

  console.log(change);
};

calculateChange(2921, 122000);

*/
