function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return console.log('\'' + name + ' is ' + age + ' years old.\'');
}
ageCalculator("Miranda", 1983, 2015);
ageCalculator("Ferdinand", 1988, 2015);
ageCalculator("Suzie", 1984, 2016);
ageCalculator("Jack", 2004, 2016);
ageCalculator("Ali", 2016, 2016);