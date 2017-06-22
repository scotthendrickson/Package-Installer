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
    //Going to use Checker to keep all the dependencies for each package organized to look for circular issues
    var checker = {};

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
        //Store values for index of X and it's values
        var posX = singleStorage.indexOf(x);
        var posVal = singleStorage.indexOf(multiStorage[x]);

        //Next see if x exists in singleStorage
        if (posX > -1) {
            //If dependency isn't in array splice it in ahead of x
            if (posVal < 0) {
                singleStorage.splice(posX - 1, 0, multiStorage[x]);
            } else if (posVal > 0 && posVal > posX) {
                //Is dependency in array but behind X? Splice it out and move it ahead
                singleStorage.splice(posVal, 1);
                singleStorage.splice(posX - 1, 0, multiStorage[x]);
            }
        } else {

            //If X isn't in the array but dependency is just push X to the end
            if (posVal > -1) {
                singleStorage.push(x);
            } else {
                //if neither exists in the array push them to the end in order
                singleStorage.push(multiStorage[x], x);
            }
        }
    }

    //Here's where it checks for the Circular arguments
    for (var y in multiStorage) {
        //If package doesn't exist add it with it's dependency in an array
        if (!checker[y]) {
            checker[y] = [multiStorage[y]];
        }

        //If the dependency has a dependency add it to the array for the package
        if (multiStorage[multiStorage[y]]) {
            checker[y].push(multiStorage[multiStorage[y]]);
        }

        //See if the dependency exists in checker and if the package is one of it's dependencies. Return false if true
        if(checker[multiStorage[y]]) {
            var tempArray = checker[multiStorage[y]];
            if (tempArray.indexOf(y) > -1) {
                return false;
            }
        }
    }

    //Return Single Array joined
    return singleStorage.join(", ");
}

console.log(packageInstaller(testArray));
//Returned KittenService, Ice, CyberPortal, Leetmeme, CamelCaser, Fraudstream
console.log(packageInstaller(testArray2));
//Returned CamelCaser, KittenService
console.log(packageInstaller(testArray3));
//Returned false




