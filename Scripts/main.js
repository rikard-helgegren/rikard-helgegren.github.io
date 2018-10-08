
var welcomeHeading = document.getElementById('h_welcome');

var myButton1 = document.getElementById('button1');
myButton1.onclick =function(){
    getUserName();
}

function getUserName() {
  var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    setUserName(myName);
}

function setUserName(userName) {
  // body...
  welcomeHeading.textContent = 'Welcome ' + userName + ', to R2D2s webbpage';
}

if(localStorage.getItem('name')) {
  var name =  localStorage.getItem('name')
  if (name !== null){
    setUserName(localStorage.getItem('name'));
  }
  
} 



var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/smile.png') {
      myImage.setAttribute ('src','Images/coolSmily.png');
    } else {
      myImage.setAttribute ('src','Images/smile.png');
    }
}




var para = document.getElementById('p_1');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a opinion');
  para.textContent = 'WOOOOA: ' + name;
}













