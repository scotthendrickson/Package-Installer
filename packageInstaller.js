//Need to write a function that when given an array returns a string.
var testArray = ["KittenService: ", "Leetmeme: CyberPortal", "CyberPortal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "];

//To start I'm just going to create a function that takes the array, joins it and then returns a string
function packageInstaller(inputArray) {
    return inputArray.join("").replace(": ", ", ");
}

//Expected outcome is KittenService, Leetmeme, CyperPortalCypberPortal, IceCamelCaser, KittenServiceFraudstream, LeetmemeIce,
console.log(packageInstaller(testArray));

//Returned KittenService, Leetmeme: CyberPortalCyberPortal: IceCamelCaser: KittenServiceFraudstream: LeetmemeIce: so I wasn't quiet correct in what I thought I'd get.