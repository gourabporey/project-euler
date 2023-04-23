// Multiples of 3 and 5 
const sumOfMultiples = function() {
  const multiplesOf3 = 999 / 3;
  const multiplesOf5 = 995 / 5;
  const multiplesOf15 = Math.floor(1000 / 15);

  const sumOfMultiplesOf3 = multiplesOf3 /  2 * ((2 * 3 + (multiplesOf3 - 1) * 3));
  const sumOfMultiplesOf5 = multiplesOf5 /  2 * ((2 * 5 + (multiplesOf5 - 1) * 5));
  const sumOfMultiplesOf15 = multiplesOf15 /  2 * ((2 * 15 + (multiplesOf15 - 1) * 15));

  return sumOfMultiplesOf3 + sumOfMultiplesOf5 - sumOfMultiplesOf15;
}
