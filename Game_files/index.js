console.log("Index js Is Running");
Audio("../static/keyPress.mp3")
var success=new Audio("../static/success.mp3")
var loss=new Audio("../static/loss.mp3")
var wrong=new Audio("../static/wrong.mp3")
var correct=new Audio("../static/correct.mp3")
let myinp=document.getElementsByClassName('myinp')
let keys=document.getElementsByClassName('key')
let mybox=document.querySelector('.mybox')

let trofficScore=document.querySelector('.troffie-score')
let upperBarDivs=document.querySelector('.upper-2-bar-mydiv')
let showpopup=document.querySelector('.showpopup')
var size = json.length-1;
let json=[
    {"vegetable":[
        "Carrot",
        "Broccoli",
        "Tomato",
        "Spinach",
        "Potato",
        "Bell pepper",
        "Cucumber",
        "Lettuce",
        "Onion",
    ]},
    {"household":[
        "Sofa",
        "Table",
        "Chair",
        "Bed",
        "Dresser",
        "Couch",
        "Desk",
        "TV stand",
        "Bookshelf",
        "Lamp",
        "Mirror",
        "Microwave",
        "Toaster",
        "Blender"
    ]},
    {"animal":[
        "Rabbit",
        "Mouse",
        "Hamster",
        "pig",
        "Ferret",
        "Chinchilla"]},
    {"bird": [
        "Sparrow",
        "Robin",
        "Blue Jay",
        "Cardinal",
        "Finch",
        "Parrot",
        "Canary",
        "Eagle",
        "Owl",
        "Dove",
        "Crow",
        "Seagull",
        "Swan"
    ]}
]
const getRandom=()=>{
    // Firstly Removing all The Input Elements
    document.querySelectorAll('.myinp').forEach(e => e.remove());
    document.querySelectorAll('.mypart').forEach(e => e.style.visibility='hidden');
    corrNum=0;
    count=0;
    let val=Math.floor(Math.random() * size) + 0;
    console.log(val);
    console.log(json[val]);
    mybox.innerHTML=Object.keys(json[val])
    let myobjValues=json[val][Object.keys(json[val])]
    console.log(myobjValues);
    // Choosing Random From The Value Array
    let getNinputs=Math.floor(Math.random() * (myobjValues.length-1)) + 0;
console.log(getNinputs);
let myword=json[val][Object.keys(json[val])][getNinputs]
getWord=myword.toLowerCase();
console.log("my Word is My Word",myword);
for (let i = 0; i < myword.length; i++) {
    const ch = myword[i];
    const inp=document.createElement("input")
    inp.classList.add('myinp')
    inp.classList.add(`${ch.toLowerCase()}-myinp-${i}`)
    // inp.classList.add('myinp')
    inp.setAttribute("readonly", "readonly");
    upperBarDivs.appendChild(inp)
    console.log("My word is:::",myword);
}

}
const main=async(keyVal)=>{
    audio.play();
        console.log("my Key click",keyVal);
        // Checking The KeyVal
        const present=getWord.includes(keyVal);
        let idx=getWord.indexOf(keyVal);;
            document.getElementsByClassName(keyVal.toUpperCase())[0].style.color='red';
        let newPromise =  
                new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                    resolve(document.getElementsByClassName(keyVal.toUpperCase())[0].style.color="blue"); 
                }, 100); 
            }); 
            let result = await newPromise; 
   
        
       
        console.log("my Present Value is",present);
        if (count>=getMaxAttempts) {
            console.log("You Loss Click To Replay The Game");
            loss.play();
            setTimeout(() => {
                document.querySelector('.container').classList.add('whenpopup')
            }, 300);
            showpopup.style.visibility='visible'

                trofficScore.innerHTML=0;
                getRandom();
        }
        else if (present) {
            // Element is Present In My Value
            // firstly Incrementing The Count
            corrNum++;
            correct.play()
            console.log("Element Present my keyval  is:",keyVal,"and Index is:",idx);
            document.querySelector(`.${keyVal}-myinp-${idx}`).value=keyVal;

            let regex = new RegExp(keyVal);
            getWord=getWord.replace(regex,'_')
            console.log("my Get Word After Replacing",getWord);
            if (corrNum==getWord.length && count<getMaxAttempts) {
                // my String is Empty 
                console.log("You Empty");
                success.play()
                
                let innerScoreText=Number(trofficScore.innerHTML)
                console.log(innerScoreText);
                if (innerScoreText==winScore) {
                    document.querySelector('.popup-message').innerHTML=" "
                    document.querySelector('.popup-message').innerHTML="You Won"
                    document.querySelector('.showpopup').style.visibility='visible'
                    document.querySelector('.container').classList.add('whenpopup');
                }
                trofficScore.innerHTML=++innerScoreText;

                getRandom();
            }
        }
        else{
            // Element Is Not Present in my Value
            console.log("Element not Present");
            count++;
            wrong.play()
            constructHangMan();

        }
}
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const keyVal=key.innerHTML.toLowerCase();
    key.addEventListener('click',(e)=>{
    main(keyVal)
        
    })
    
}
