// Level 1
function cropWateringCalculator(forecast) {
  let count = 0;
  forecast.forEach((day) => {
    if (day.weather === "rain") {
      count++;
    }
  });
  return count;
}

// Level 2 and 3
function cropWateringCalculatorImproved(
  forecast,
  numOfCrops,
  canUnits
) {
  let rainyDayCount = 0;
  forecast.forEach((day) => {
    if (day.weather === "rain") rainyDayCount++;
  });
  canUnits
  ? (insert = `${
      ((28 - rainyDayCount) * numOfCrops) / 40
    } cans`)
  : (insert = `${
      (28 - rainyDayCount) * numOfCrops
    } sprinkles`);

  let responseString = `There are ${rainyDayCount} days that you can skip watering your crops. You will need ${insert} of water.`;

  

  return responseString;
}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };
