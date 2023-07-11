// Faizan's Currency Convert (CC) via Function in JavaScript
alert("Hey! This is Faizan's CC");
// For Dollar USD to INR
function convert(convertDtoI) {
  let result;
  let dollar = 82.41
  for (currency in convertDtoI) {
    result = dollar * convertDtoI[currency];
  }
  return result;

}
let INR = [prompt("Enter Rupee for Dollar(USD)")];
let result1 = convert(INR);
console.log(result1);

// For Euro Currency to INR

function convert1(convertEtoI){
  let result;
  let euro = 90.70
  for(currency in convertEtoI){
    result = euro * convertEtoI[currency];
  }
  return result;
}
let INR1 = [prompt("Enter Rupee for Euro(E)")];
let result2 = convert1(INR1);
console.log(result2);

// For Riyal Currency to INR
function convert2(convertRtoI){
  let result;
  let riyal = 21.97
  for(currency in convertRtoI){
    result = riyal * convertRtoI[currency];
  }
  return result;
}
let INR2 = [prompt("Enter Rupee for Riyal")];
let result3 = convert2(INR2);
console.log(result3);

// for Kuwaiti Dinar to INR
function convert3(convertKDtoI){
  let result;
  let kd = 268.44
  for(currency in convertKDtoI){
    result = kd * convertKDtoI[currency];
  }
  return result;
}
let INR3 = [prompt("Enter Rupee for Kuwaiti Dinar(KD)")];
let result4 = convert3(INR3);
console.log(result4);
