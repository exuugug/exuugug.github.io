var myImage = document.querySelector('img');
myImage.onclick = function(){
//	alert("123");
var imgSrc = myImage.getAttribute("src");
if(imgSrc === "image/a.jpg")
	{
		myImage.setAttribute("src","image/b.jpg");
	}
else
	{
		alert("not changed");
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() {
	  setUserName();
	}
function setUserName() {
	  var myName = prompt('Please enter your name.');
	  localStorage.setItem('name', myName);
	  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
	  setUserName();
	} else {
	  var storedName = localStorage.getItem('name');
	  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
	}