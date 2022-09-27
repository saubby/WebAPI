const questions = [ 
    {
    'que' : 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct' : 'a'
    },
    
    {
    'que': 'What year was JavaScript launched?', 
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b',
    },
    
    {
    'que': 'What does CSS stands for?', 
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Helicopters Terminals Motorboats Lamborginis', 
        'correct': 'b',
    },

    {
        'que': 'JavaScript is an _ language?', 
            'a': 'Object-oriented',
            'b': 'Object based',
            'c': 'Procedural',
            'd': 'None of the above', 
            'correct': 'a',
    },

    {
        'que': 'How can a data type be declared to be a constant type?', 
            'a': 'Const',
            'b': 'Var',
            'c': 'Let',
            'd': 'Constant', 
            'correct': 'a',
    },

    {
        'que': 'Which of th following methods is used to access HTML elements using JavaScript?', 
            'a': 'getElementbyID()',
            'b': 'getElementbyClassName()',
            'c': 'Both A and B',
            'd': 'None of the above', 
            'correct': 'c',
    },

    {
        'que': 'What keyboard is used to check whether a given property is valid or not?', 
            'a': 'exists',
            'b': 'is in',
            'c': 'lies',
            'd': 'in', 
            'correct': 'd',
    },

    {
        'que': 'What will be the output of the following code snippet? var a  = true + true + true * 3; print (a)', 
            'a': '3',
            'b': '0',
            'c': 'Error',
            'd': '5', 
            'correct': 'd',
    },

    {
        'que': 'What is the output of the following code snippet? print(Nan === NaN); ', 
            'a': 'true',
            'b': 'undefined',
            'c': 'False',
            'd': 'Error', 
            'correct': 'c',
    },

    {
        'que': 'How to stop an interval timer in JavaScript?', 
            'a': 'clearTimer',
            'b': 'clearInterval',
            'c': 'intervalOver',
            'd': 'None of the above', 
            'correct': 'b',
    } 
]

let index=0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    //console.log(data)
    quesBox.innerText = data.que
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer= input.value; 
            
            }
        }
    )
    return answer;
 }

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )    
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing the quiz </h3>
    <h2> ${right}/${total} are corret</h2>
    </div>
    `
}      
    

loadQuestion();