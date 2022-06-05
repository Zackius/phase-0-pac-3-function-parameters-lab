function introduction(name){
    console.log(`Hi, my name is ${name}.`)
}

function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`)
}


function introductionWithLanguage(name, language = "Javascript"){
    console.log(`Hi, my name is ${name} and I am learning to program in`)
}