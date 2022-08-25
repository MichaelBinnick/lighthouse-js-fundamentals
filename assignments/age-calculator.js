const ageCalculator = function(name, yearOfBirth, currentYear) {
  let yearDiff = currentYear - yearOfBirth;
  return (name + " is " + yearDiff + " years old.");
}