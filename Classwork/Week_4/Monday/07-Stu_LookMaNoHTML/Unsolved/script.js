// Create your HTML Page via DOM Methods here!
var a1 = document.createElement("h1");
var a2 = document.createElement("h2");
var img1 = document.createElement("img");
var imgP = document.createElement("p");
var list1 = document.createElement("ul");

a1.textContent = "This was made via javascript.";
a1.style.textAlign = "center";
document.body.appendChild(a1);

a2.textContent = "This was made via javascript.";
a2.style.textAlign = "center";
document.body.appendChild(a2);

img1.setAttribute("src", "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg");
img1.setAttribute("alt", "Image");
img1.style.textAlign = "center";
document.body.appendChild(img1);

imgP.textContent = "Wow, green milk!";
imgP.style.textAlign = "center";
document.body.append("imgP");

