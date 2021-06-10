var nameofbirthdayboy = document.getElementById("nameofbirthdayboy");
var button = document.getElementById("button");
var div = document.querySelector("div");


button.addEventListener("click", function(){
    if (nameofbirthdayboy.value.length > 0)
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(nameofbirthdayboy.value));
    div.appendChild(p);
    document.querySelector("p").classList.add("namestyle");
    document.querySelector("h1").classList.add("removeheader");
    document.querySelector("input").classList.add("removeheader");
    document.querySelector("button").classList.add("removeheader");
    document.querySelector("img").classList.remove("removeheader");
    });