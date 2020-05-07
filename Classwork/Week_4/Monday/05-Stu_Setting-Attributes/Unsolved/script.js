var imgEl = document.querySelectorAll("img");

for (i = 0; i < imgEl.length; i++) {
    imgEl[i].setAttribute("src", "images/image_"+(i+1)+".jpg");
    imgEl[i].setAttribute("alt", "images/image_"+(i+1)+".jpg");
    imgEl[i].setAttribute("style", "width:500px; height:200px;");
}
var aRef = document.querySelectorAll("a");

for (i = 0; i < aRef.length; i++) {
    aRef[i].setAttribute("href", "#");
    aRef[i].setAttribute("style", "text-decoration:underline; color:red;");;
}