let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/quokka.jpeg') { 
        myImage.setAttribute ('src', 'images/quokka3.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/quokka.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h4');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name, myName');
    myHeading.textContent = `Quokka is cool, ${myName}`;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Quokka is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}