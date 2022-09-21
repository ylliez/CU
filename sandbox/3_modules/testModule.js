let petName = "Max";

module.exports.name = function () { // allowing to be exported from module, declaring a variable and assigning it to a function
    return "Sabine";
}

module.exports.age = function () {
    return "29 (really)";
}

module.exports.setPetName = function (inComing) {
    petName = inComing;
}

module.exports.getPetName = function () {
    // appendPetName(); // can call private functions w/in 
    return petName;
}

// private!
function appendPetName() {
    petName = petName + "*****";
}