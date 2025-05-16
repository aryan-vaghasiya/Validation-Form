const formTag = document.getElementById("formID");
const submitBtn = document.getElementById("submit");
const table = document.getElementById("table");

const firstNameInp = document.getElementById("f-name");
const lastNameInp = document.getElementById("l-name");
const eMailInp = document.getElementById("email");
const moNumberInp = document.getElementById("num");
const newPassInp = document.getElementById("n-pass");
const conPassInp = document.getElementById("c-pass");

const fNameWar = document.getElementById("f-name-war");
const lNameWar = document.getElementById("l-name-war");
const eMailWar = document.getElementById("email-war");
const numWar = document.getElementById("num-war");
const nPassWar = document.getElementById("n-pass-war");
const cPassWar = document.getElementById("c-pass-war");

firstNameInp.required = true;
moNumberInp.required = true;

let arrData = []

function isValidFirstName(fname) {
    const nameRegex = /^[a-z]{1,20}$/i;
    return nameRegex.test(fname);
}

function isValidLastName(lname) {
    const nameRegex = /^[a-z]{1,20}$/i;
    return nameRegex.test(lname);
}

function isValidEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
}

function isValidNumber(num) {
    const numberRegex = /^[0-9]{10}$/;
    return numberRegex.test(num);
}

function isValidNPass(npass) {
    const passRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[!@#$%^&*a-z0-9]{8,30}$/i;
    return passRegex.test(npass);
}

formTag.addEventListener("submit", (event) => {
    event.preventDefault();
    const fName = firstNameInp.value;
    const lName = lastNameInp.value;
    const eMail = eMailInp.value;
    const number = moNumberInp.value;
    const newPass = newPassInp.value;
    const conPass = conPassInp.value;

    let isValid = true;
    
    if (!isValidFirstName(fName)){
        isValid = false;
    }

    if (!isValidLastName(lName)){
        isValid = false;
    }    
    
    if (!isValidEmail(eMail)){
        isValid = false;
    }
    
    if (!isValidNumber(number)){
        isValid = false;
    }
    
    if (!isValidNPass(newPass)){
        isValid = false;
    }
    if (conPass !== newPass){
        isValid = false;
    }
    if(isValid){
        alert(`Form Submitted Successfully:\n
    First Name: ${fName}\n
    Last Name: ${lName}\n
    Email: ${eMail}\n
    Mobile Number: ${number}\n
    Password: ${conPass}`);
        arrData.push(`${fName}`, `${lName}`, `${eMail}`, `${number}`, `${conPass}`);
        addRowToTable(fName, lName, eMail, number, conPass)
        firstNameInp.value = "";
        lastNameInp.value = "";
        eMailInp.value = "";
        moNumberInp.value = "";
        newPassInp.value = "";
        conPassInp.value = "";

    }
        
    else{
        alert("Enter Valid Data")
    }
});


firstNameInp.addEventListener("focus", () => {
    fNameWar.style.display = "block";
});

lastNameInp.addEventListener("focus", () => {
    lNameWar.style.display = "block";
});

eMailInp.addEventListener("focus", () => {
    eMailWar.style.display = "block";
});

moNumberInp.addEventListener("focus", () => {
    numWar.style.display = "block";
});

newPassInp.addEventListener("focus", () => {
    nPassWar.style.display = "block";
});

conPassInp.addEventListener("focus", () => {
    cPassWar.style.display = "block";
});


firstNameInp.addEventListener("input", () => {
    if (!isValidFirstName(firstNameInp.value)) {
        fNameWar.style.display = "block";    
    }
    else{
        fNameWar.style.display = "none";
    }
})

lastNameInp.addEventListener("input", () => {
    if (!isValidLastName(lastNameInp.value)) {
        lNameWar.style.display = "block";    
    }
    else{
        lNameWar.style.display = "none";
    }
})

eMailInp.addEventListener("input", () => {
    if (!isValidEmail(eMailInp.value)) {
        eMailWar.style.display = "block";    
    }
    else{
        eMailWar.style.display = "none";
    }
})

moNumberInp.addEventListener("input", () => {
    if (!isValidNumber(moNumberInp.value)) {
        numWar.style.display = "block";    
    }
    else{
        numWar.style.display = "none";
    }
})

newPassInp.addEventListener("input", () => {
    if (!isValidNPass(newPassInp.value)) {
        nPassWar.style.display = "block";    
    }
    else{
        nPassWar.style.display = "none";
    }
})

conPassInp.addEventListener("input", () => {
    if (conPassInp.value === newPassInp.value) {
        cPassWar.style.display = "none";    
    }
    else{
        cPassWar.style.display = "block";
    }
})

function addRowToTable(firstName, lastName, email, mobile, pass) {
    const tableBody = document.getElementById("table");
    const newRow = document.createElement("tr");
    
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${pass}</td>
    `;

    tableBody.appendChild(newRow);
    tableBody.style.display = "inline-block"
}