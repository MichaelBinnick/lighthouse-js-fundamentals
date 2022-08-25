const howManyHundreds = function(bottles){
  let containers = bottles / 100;
  if (containers >= 1) {
    return Math.floor(containers);
  }
  else {
    return 0;
  }
}