const convertToCelsius = function(temp) {
  var convertedTemp = ((temp - 32)*(5/9));
  convertedTemp = (Math.round((convertedTemp * 10)) / 10);
  return convertedTemp;
};

const convertToFahrenheit = function(temp) {
  var convertedTemp = (((temp/5)*9) + 32);
  convertedTemp = (Math.round(convertedTemp * 10) / 10);
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
