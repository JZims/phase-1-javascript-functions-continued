function saturdayFun(activity="roller-skate"){
    let intro = "This Saturday, I want to"
    return `${intro} ${activity}!`
}

function mondayWork(activity="go to the office"){
    let intro = "This Monday, I will"
    return `${intro} ${activity}.`
}

function wrapAdjective(flair="*") {
           return function(adjective="special") {
            
            return `You are ${flair}${adjective}${flair}!`
    
        }
    
}