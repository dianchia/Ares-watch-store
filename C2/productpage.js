function ids(clicked_id){
	var alertText = clicked_id;
	window.localStorage.setItem("buttonid", alertText);//Store the clicked_id in a local storage
	window.location.href="indiproduct.html";//Jump to another page
}

function show_image(){
	var imagesId = localStorage.getItem("buttonid");
	var src;
	var name;
	var dec1;
	var dec2;
	var dec3;
	var dec4;
	var dec5;
	var dec6;
	var dec7;
	var price;
	var warranty;
	
	switch(imagesId){
		case '1': src = "Images/Watches/High End/HE-watch1.png";//input the src of image here base on the id of image
					name = "Ares Xiphos Automatic Black Dials Men's Watch";
					dec1 = "Water resistant to 200m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "60 diamonds on exterior case";
					dec4 = "Automatic calibre";
					dec5 = "3 row polished stainless steel & black ceramic";
					dec6 = "Scratch resistant sapphire crystal";
					dec7 = " ";
					price = "RM 8999";
					warranty = "2 years international warranty";
		break;
		
		case '2': src = "Images/Watches/High End/HE-watch2.png";
					name = "Ares Xiphos Black Dials Men's Watch";
					dec1 = "Water resistant to 300m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "35 diamonds on exterior case";
					dec4 = "Quartz movement";
					dec5 = "Powered by a battery";
					dec6 = "3 row polished stainless steel & black ceramic";
					dec7 = "Scratch resistant sapphire crystal";
					price = "RM 12050";
					warranty = "2 years international warranty";
		break;
		
		case '4': src = "Images/Watches/High End/HE-watch4.png";
					name = "Ares Xiphos White Dial Ladies Watch";
					dec1 = "Water resistant to 300m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "30 diamonds on exterior case";
					dec4 = "Quartz movement";
					dec5 = "Powered by a battery";
					dec6 = "3 row polished stainless steel with 18K 2N yellow gold";
					dec7 = "Scratch resistant sapphire crystal";
					price = "RM 14999";
					warranty = "2 years international warranty";
		break;
		
		case '5': src = "Images/Watches/High End/HE-watch5.png";
					name = "Ares Xiphos Automatic White Dial Ladies Watch";
					dec1 = "Water resistant to 300m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "12 diamonds around inner watch dial";
					dec4 = "Automatic calibre";
					dec5 = "3 row polished stainless steel with 18K 2N yellow gold";
					dec6 = "Sapphire crystal with anti-reflective treatment";
					dec7 = " ";
					price = "RM 15679";
					warranty = "2 years international warranty";
		break;
		
		case '3': src = "Images/Watches/High End/HE-watch3.png";
					name = "Ares Xiphos Blue Dial Men’s Watch ";
					dec1 = "Water resistant to 300m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "Quartz movement";
					dec4 = "Powered by a battery";
					dec5 = "3 row polished stainless steel with yellow gold";
					dec6 = "Scratch resistant sapphire crystal";
					dec7 = " ";
					price = "RM 14999";
					warranty = "2 years international warranty";
		break;
		
		case '8': src = "Images/Watches/Mid End/ME-watch3.png";
					name = "Ares Linothorax Blue Dial Ladies Watch";
					dec1 = "Water resistant to 300m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "Quartz movement";
					dec4 = "Powered by a battery";
					dec5 = "Blue textile, rubber strap";
					dec6 = "Sapphire crystal with anti-reflective treatment";
					dec7 = " ";
					price = "RM 5999";
					warranty = "2 years international warranty";							
		break;
		
		case '7': src = "Images/Watches/Mid End/ME-watch2.png";
					name = "Ares Linothorax Black Dial Men’s Watch ";
					dec1 = "Water resistant to 200m";
					dec2 = "Date window at 3.30 o'clock";
					dec3 = "Automatic Calibre";
					dec4 = "3 row polished stainless steel";
					dec5 = "Sapphire crystal with anti-reflective treatment";
					dec6 = " ";
					dec7 = " ";
					price = "RM 6475";
					warranty = "2 years international warranty";
		break;
		
		case '6': src = "Images/Watches/Mid End/ME-watch1.png";
					name = "Ares Linothorax Automatic Black Dial Men’s Watch ";
					dec1 = "Water resistant to 300m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "Quartz movement";
					dec4 = "Powered by a battery";
					dec5 = "3 row polished stainless steel";
					dec6 = "Scratch resistant sapphire crystal";
					dec7 = " ";
					price = "RM 4899";
					warranty = "2 years international warranty";	
		break;
		
		case '9': src = "Images/Watches/Mid End/ME-watch4.png";
					name = "Ares Linothorax Automatic Black Dial Ladies Watch ";
					dec1 = "Water resistant to 200m";
					dec2 = "Date window at 3 o'clock";
					dec3 = "Automatic calibre";
					dec4 = "3 row polished stainless steel";
					dec5 = "Sapphire crystal with anti-reflective treatment";
					dec6 = " ";
					dec7 = " ";
					price = "RM 5999";
					warranty = "2 years international warranty";	
		break;
		
		case '10': src = "Images/Watches/Low End/LE-watch1.png";
					name = "Ares Gastraphetes Brown Dial Unisex Watch";
					dec1 = "Water resistant to 100m";
					dec2 = "Date window at 3.30 o'clock";
					dec3 = "Quartz movement";
					dec4 = "Powered by a battery";
					dec5 = "Brown alligator leather strap";
					dec6 = "Scratch resistant sapphire crystal";
					dec7 = " ";
					price = "RM 2999";
					warranty = "2 years international warranty";
		break;
		
		case '11': src = "Images/Watches/Low End/LE-watch2.png";
					name = "Gastraphetes Black Dial Unisex Watch";
					dec1 = "Water resistant to 100m";
					dec2 = "Date window at 3.30 o'clock";
					dec3 = "Quartz movement";
					dec4 = "Powered by a battery";
					dec5 = "Black perforated rubber strap";
					dec6 = "Scratch resistant sapphire crystal";
					dec7 = " ";
					price = "RM 2999";
					warranty = "2 years international warranty";
		break;
		
		case '12': src = "Images/Watches/Low End/LE-watch3.png";
					name = "Ares Gastraphetes Blue Dial Unisex Watch ";
					dec1 = "Water resistant to 100m";
					dec2 = "Date window at 3.30 o'clock";
					dec3 = "Quartz movement";
					dec4 = "Powered by a battery";
					dec5 = "Blue NATO strap with orange and grey stripes";
					dec6 = "Scratch resistant sapphire crystal";
					dec7 = " ";
					price = "RM 1999";
					warranty = "2 years international warranty";
		break;
		
		case '13': src = "Images/Watches/Low End/LE-watch4.png";
					name = "Ares Gastraphetes Green Khaki Dial Unisex Watch";
					dec1 = "Water resistant to 100m";
					dec2 = "Date window at 3.30 o'clock";
					dec3 = "Quartz movement";
					dec4 = "Powered by a battery";
					dec5 = "Khaki textile strap";
					dec6 = "Scratch resistant sapphire crystal";
					dec7 = " ";
					price = "RM 1999";
					warranty = "2 years international warranty";
	

	}
	var img = document.createElement("img");//this no need to change XD
	img.src = src;
	img.width = 500;
	img.height = 600;
	img.alt = "Ares Watch";
	
	document.getElementById("images").appendChild(img);//to output image to the element with id="images"
	document.getElementById("name").innerHTML = name;
	document.getElementById("dec1").innerHTML = dec1;
	document.getElementById("dec2").innerHTML = dec2;
	document.getElementById("dec3").innerHTML = dec3;
	document.getElementById("dec4").innerHTML = dec4;
	document.getElementById("dec5").innerHTML = dec5;
	document.getElementById("dec6").innerHTML = dec6;
	document.getElementById("dec7").innerHTML = dec7;
	document.getElementById("price").innerHTML = price;
	document.getElementById("warranty").innerHTML = warranty;
					
}


