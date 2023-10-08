// code your solution here

function saturdayFun(string) {
    let saturday
    if (string === undefined) {
        string = 'roller-skate'
    }
    saturday = `This Saturday, I want to ${string}!`
    console.log(saturday)
    return saturday
}
saturdayFun()

const mondayWork = function(string) {
    let monday
    if (string === undefined) {
        string = 'go to the office'
    }
    monday = `This Monday, I will ${string}.`
    console.log(monday)
    return monday
}
mondayWork()

function wrapAdjective(wrap = '*') {
    return function (adjective) {
        let you = 'You are'
        return `${you} ${wrap}${adjective}${wrap}!`
    }
}

let result = wrapAdjective()
let emphatic = result()
console.log(emphatic)