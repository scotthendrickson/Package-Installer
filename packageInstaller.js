//Next step I need to make the function take the array and put the dependencies ahead of the package that needs them.

//These will be my test arrays
var testArray = ["KittenService: ", "Leetmeme: CyberPortal", "CyberPortal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "];
var testArray2 = ["KittenService: CamelCaser", "CamelCaser: "];
var testArray3 = ["KittenService: ", "Leetmeme: CyberPortal", "CyberPortal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"];

//Need to sort the array
function packageInstaller(testArray) {
    //Going to store any values that don't have dependencies in Single and any that do in Multi
    var singleStorage = [];
    var multiStorage = {};


    for (var i = 0; i < testArray.length; i++) {
        //First split each entry in the array into a temp array
        var tempArray = testArray[i].split(": ");

        //If no dependcies it goes straight into SingleStorage or else multiStorage
        if (tempArray[1].length === 0) {
            singleStorage.push(tempArray[0]);
        } else {
            multiStorage[tempArray[0]] = tempArray[1];
        }
    }

    //Need to add values from multiStorage to singleStorage with the dependency ahead of the package
    for (var x in multiStorage) {
        if (singleStorage.indexOf(x) === -1) {
            singleStorage.push(multiStorage[x], x);
        }
    }

    //Return Single Array joined
    return singleStorage.join(", ");
}


console.log(packageInstaller(testArray));
//Returned KittenService, Ice, CyberPortal, Leetmeme, KittenService, CamelCaser, Leetmeme, Fraudstream
console.log(packageInstaller(testArray2));
//Returned CamelCaser, CamelCaser, KittenService
console.log(packageInstaller(testArray3));
//Returned KittenService, Fraudstream, CyberPortal, Leetmeme, KittenService, CamelCaser, Leetmeme, Ice

//Next I'll need to remove duplicates and work on making certain that I'm getting the dependencies in the correct order cause


