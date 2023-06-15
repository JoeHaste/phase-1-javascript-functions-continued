function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun('bathe my dog'));

const mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork('work from home'));

function wrapAdjective(string = "a hard worker"){
    return function(arg = "a dedicated programmer") {
        return `You are ${string}${arg}${string}!`
    }
}

