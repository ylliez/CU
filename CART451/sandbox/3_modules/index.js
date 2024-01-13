// //add a reference to the module... 
// const testModuleVar = require('./testModule'); // need to specify search because not in a trad node-module dir; also no need to add '.js'
// //call the function name ... 
// console.log('Name: ' + testModuleVar.name());
// console.log('Age: ' + testModuleVar.age());
// console.log('Pet: ' + testModuleVar.getPetName());
// testModuleVar.setPetName("Santiago");
// console.log('Pet: ' + testModuleVar.getPetName());

// //use the static ...
// const testModuleStat = require('./staticModule');
// console.log(testModuleStat);

// testModuleStat.passMessage("testMessage_1");
// testModuleStat.passMessage("testMessage_2");
// testModuleStat.passMessage("testMessage_3");

// // next var
// const testModuleStatTwo = require('./staticModule');
// console.log(testModuleStatTwo);
// testModuleStatTwo.passMessage("testMessage_1");
// testModuleStatTwo.passMessage("testMessage_2");
// testModuleStatTwo.passMessage("testMessage_3");
// // note really multiple instances, two instances sharing variables..

const testModuleClass = require('./classModule');
//using "classes" -> no we are not having to "invoke" -> gives us a REF to the base definition....
//The require statement gives you what many other languages call the base type.
console.log(testModuleClass);

//make two seperate instances..
let instA = new testModuleClass();
console.log(instA);
instA.passMessage("testMessage Again");
instA.passMessage("testMessageTwo Again");
instA.printMessages();
console.log(instA);


let instB = new testModuleClass();
console.log(instB);
instB.passMessage("testMessageOnB Again");
instB.printMessages();
console.log(instB);