// two modular way 
const readline=require('readline');
const rl=readline.createInterface({input:process.stdin, output:process.stdout});

const generateRan=()=>{
    return Math.floor((Math.random()*10)+1);
    
}

const ansQuestion=()=>{
    let num1=generateRan();
    let num2=generateRan();
    let answer=num1+num2;

    rl.question(`What is ${num1}+${num2} \n`, (userInput)=>{
        if(userInput.trim()==answer){
            rl.close();

        }else{
            rl.setPrompt(`Incorrect answer try again `);
            rl.prompt();
            ansQuestion();
        }

    })
}

ansQuestion();

rl.on('close',()=>{
    console.log('Correct. Thanks you for your response');

})




// one declarative way 
// const { userInfo } = require('os');
// const readline=require('readline');
// const rl=readline.createInterface({input:process.stdin, 
// output:process.stdout
// });

// let num1=Math.floor((Math.random()*10)+1);
// let num2=Math.floor((Math.random()*10)+1);

// let answer=num1+num2;

// rl.question(`What is ${num1}+${num2} \n`,(userInput)=>{
//     if(userInput.trim()==answer){
//         rl.close();
//     }else{
//         rl.setPrompt('InValid answer try again \n');
//         rl.prompt();
//         rl.on('line',(userInput)=>{
//             if(userInput.trim()==answer){
//                 rl.close();
//             }else{
//                 rl.setPrompt(`Your answer is ${userInput}: incorrect \n`);
//                 rl.prompt();
//             }
//         })
//     }
// });


// rl.on('close',(userInput)=>{
//     console.log('Correct answer');
// })

