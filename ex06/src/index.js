function firstName(firstName){
  return firstName.toUpperCase();
};

function lastName(lastName){
  return lastName.toLowerCase();
};

exports.firstName = firstName;
exports.lastName = lastName

console.log(firstName("dad"));
console.log(lastName("MOM"));

