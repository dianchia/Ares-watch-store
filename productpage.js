function ids(clicked_id){
	var alertText = clicked_id;
	window.localStorage.setItem("buttonid", alertText);//Store the clicked_id in a local storage
	window.location.href="productpage.html";//Jump to another page
}

function show_image(){
	var imagesId = localStorage.getItem("buttonid");
	var src;
	var description;
	switch(imagesId){
		case '1': src = "areslogo.png";//input the src of image here base on the id of image
					description = "it's a logo";
		break;
		case '2': src = "Banana.png";
					description = "it's a banana";
		break;
		case '3': src = "watermelon.png";
					description = "it's a watermelon";
		break;
	}
	var img = document.createElement("img");//this no need to change XD
	img.src = src;
	img.width = 200;
	img.height = 200;
	img.alt = "Ares Watch";
	
	document.getElementById("images").appendChild(img);//to output image to the element with id="images"
	document.getElementById("description").innerHTML = description;
}

function startTime() { //to add time just call startTime() function at where you want to call it
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}