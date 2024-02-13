import { randomize, savetolocalStorage, getlocalStorage, removefromlocalStorage } from "./localstorage.js";


let names = document.getElementById("names");
let add = document.getElementById("add");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let groups = document.getElementById("groups")
let namebox = document.getElementById("namebox");


// if (localStorage.getItem("nam")) {
//     nameAr = JSON.parse(localStorage.getItem("nam"));
// }

const makeNames = () => {
    namebox.innerHTML="";
    let nameAr = getlocalStorage();
    // let person = names.value;
    for (let i = 0; nameAr.length > i; i++) {
        let p = document.createElement("p");
        p.textContent = nameAr[i].toString();
        p.classList.add("me-5")
        let button = document.createElement("button");
        if (nameAr[i] !== "") {
            button.textContent = "Remove Name";
            button.className = "btn btn-outline-danger"
    
            button.addEventListener("click", () => {
                // let index = nameAr.indexOf(nameAr[i]);
                // nameAr.splice(index, 1)
                // localStorage.setItem("nam", JSON.stringify(nameAr))
                removefromlocalStorage(nameAr[i]);
                p.remove();
            })
    
            p.append(button);
        }
        namebox.append(p)
    }

}

makeNames();

add.addEventListener("click", () => {
    let person = names.value;
    // console.log(person)
    if(person !== ""){
        // nameAr.push(person);
        savetolocalStorage(person);
    }
    names.value = "";
    // getlocalStorage(nameAr)
    // localStorage.setItem("nam", JSON.stringify(nameAr));
    makeNames();
})



one.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    let group = randomize(1)
    console.log(group);

    grp.innerText = `Group 1: ${JSON.stringify(randomize(1))}`;

    groups.append(grp);


})

two.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(2))}`;

    groups.append(grp);


})

three.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(3))}`;

    groups.append(grp);


})

four.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(4))}`;

    groups.append(grp);


})

five.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(5))}`;

    groups.append(grp);


})

six.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(6))}`;

    groups.append(grp);


})

seven.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(7))}`;

    groups.append(grp);


})

eight.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(8))}`;

    groups.append(grp);


})

nine.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(9))}`;

    groups.append(grp);


})

ten.addEventListener("click", () => {
    groups.innerHTML = ""

    let grp = document.createElement("h4");
    grp.innerText = `Groups: ${JSON.stringify(randomize(10))}`;

    groups.append(grp);


})

