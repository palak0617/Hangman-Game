console.log("Index js Is Running");
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
