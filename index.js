// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return(drivers.slice(0, 2))
}

const returnLastTwoDrivers = function(drivers){
    let driver = drivers.slice(-2)
    return driver
}

console.log(returnLastTwoDrivers(drivers)) 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(value) {
        return int * value
    }
}

console.log(createFareMultiplier(10))

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arg, arg2){
    return arg2(arg)
}
