// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0, 2);
};
const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice((driverArray.length - 2), driverArray.length)
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int){
    return (function(fare){return fare * int;});
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, cb){
    return cb(array);
}