//Exercise 1
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}

//Exercise 2
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

//Exercise 3
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];

//Exercise 4
function createFareMultiplier(multiplier){
    return function(value){
        return value * multiplier;
    };
}

//Exercise 5
function fareDoubler(fare){
    return fare *2;
}

//Exercise 6
function fareTripler(fare){
    return fare * 3;
}

//Exercise 7
function selectDifferentDrivers(fardrivers, fn){
    return fn(fardrivers);
}