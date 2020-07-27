//Generating Pin For Generation...

const pin = document.getElementById('generate');
pin.addEventListener('click', function(){
    invisibleNotify();
    pinGenerating();
});

//Pin Generating function()
function pinGenerating(){
    let random = Math.random();
    // console.log(Math.round(random*10000));
    let number = Math.round(random*10000).toString();
    // console.log({number});
    if(number.length == 4){
        document.getElementById('generative-pin').value = number;
        return;
    }
    pinGenerating();
}

//Tested Pin For Testing...

let number = document.getElementsByClassName('button');
for(let i=0;i<number.length;i++){
    // console.log(number[i].id);
    number[i].addEventListener('click', function(){
        invisibleNotify();
        pinCatenating(this.id);
    });
}

//Pin Catenating function()
function pinCatenating(digit){
    let previousPin = document.getElementById('tested-pin').value;
    if(previousPin.length<4){
        document.getElementById('tested-pin').value += digit;
    }
}
let operation = document.getElementsByClassName('operation');
for(let i=0;i<operation.length;i++){
    // console.log(operation[i].id);
    operation[i].addEventListener('click', function(){
        invisibleNotify();
        clearFunction(this.id);
    });
}
function clearFunction(id){
    if(id=='clear'){
        document.getElementById('tested-pin').value = "";
    }else{
        let deleteValue = document.getElementById('tested-pin').value;
        document.getElementById('tested-pin').value = deleteValue.substr(0,deleteValue.length-1);
        // console.log(deleteValue.substr(0,deleteValue.length-1));
    }
}

//Submission...Test function()

const submit = document.getElementById('submit');
submit.addEventListener('click', isMatched);
function isMatched(){
    const generative = document.getElementById('generative-pin');
    const tested = document.getElementById('tested-pin');
    if(parseInt(generative.value)>-1 || parseInt(tested.value)>-1){
        if(generative.value == tested.value){
            document.getElementById('matched').style.display = 'block';
        }else{
            document.getElementById('not-matched').style.display = 'block';
        }
    }else{
        invisibleNotify();
    }
    generative.value = "";
    clearFunction('clear');
}

//Notification invisible function()
function invisibleNotify(){
    document.getElementById('matched').style.display = 'none';
    document.getElementById('not-matched').style.display = 'none';
}