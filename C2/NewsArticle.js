function ids(clicked_id){
	var alertText = clicked_id;
	window.localStorage.setItem("buttonid", alertText);
	window.location.href="NewsArticle.html";
}

function show_image(){
	var imagesId = localStorage.getItem("buttonid");
	var src;
	var newscontent; 
	var newstitle;
	
	switch(imagesId){
		case '1': src = "Images/News/newwatch.png";
			newstitle = "LATEST WATCH HAS BEEN ANNOUNCED, PRE-ORDER STARTS EARLY NEXT JANUARY";
			newscontent = "We have just announced a new model in our Pauldron Series and Pre-Order will start early next January for the top 100 bidders. Bidding will start earlier but the date is to be confirmed. <br><br> This is due preparation for the new system to allow more bidders to enter the market but yet allowing fairer and tighter regulations.";
		break;
		
		case '2': src = "Images/News/financechart.jpg";
			newstitle = "Q3 EARNINGS REPORT HAS BEEN RELEASED";
			newscontent = "Earnings has seen Q3 has been good due to the strong sales of our limited edition sword series. Also, the marketing team has been recruiting newer and younger ambassadors from several social media sites to target the younger millenials. Additionally, the marketing also got Leonardo DiCaprio to join in the AAA (Ares Ambassador Alliance) recently. That has also boast company's image with all the marketing campaigns that has been pushing out with him. ";
		break;
		
		case '3': src = "Images/News/swordseries.png";
			newstitle = "LIMITED EDITION SWORD SERIES HAS BEEN SOLD OUT";
			newscontent = "In 2017 August, Ares had released the newest Sword Series. Sword Series is a series with simple yet classic design with leather watchband. With just three months pass by, Ares proudly announce that the Sword Series has been sold out. In just three months, the Sword Series has reached the total sales of 1 million units. &quot;It was out of our expectation, and we are really glad that people likes our watches that much.&quot; says the CEO of Ares. &quot;We will improve our watches more at the upcoming time and do expect a newer and more gorgeous piece of art from Ares.&quot;";
		break;
		
		case '4': src = "Images/News/ldc-revenant.jpg";
			newstitle = "REVENANT STAR HAS JOINED ARES AMBASSADOR ALLIANCE(AAA)";
			newscontent = "The Revenant has reached net profit of $61.6 million recently and the star of it Leonardo DiCaprio just announce that he is joining our Ares Ambassador Alliance (AAA). Leonardo announce it in his press conference that is held on 10th November 2017(Friday) and he mentioned that he is proud to join the alliance and Ares feel honored as well that Leonardo agreed on joining us. ";
		break;
		
		case '5': src = "Images/News/designerteam.jpg";
			newstitle = "FAMOUS DESIGN TEAM SEETO (C2) HAS JOINED THE ARES TEAM";
			newscontent = "The CEO of ARES has just confirmed that the designer team Seeto (C2) have agreed to work with the current team of ARES in order to incorporate more sophisticated and complex designs into watch pieces that are yet to be released in the near future. With two awards already won for unique and creative designing, the CEO of ARES is convinced that the company has a bright future in watch making with the aid and artistic minds of the designer team Seeto (C2) ";
		break;
		
		case '6': src = "Images/News/offset.jpg";
			newstitle = "RAPPER FROM THE HIP HOP GROUP MIGOS IS SPOTTED WEARING THE LATEST ARES XIPHOS AUTOMATIC BLACK DIAL MEN'S WATCH";
			newscontent = "The rapper named Offset was spotted in Malibu last night, wearing an ARES Xiphos Automatic Black Dial. The ‘bad and boujee’ rapper reportedly shared a comment that reads, “when it comes to watches, you can never go wrong with ARES as it mainly prioritizes both comfort and luxurious style” when was asked about the brand he was wearing on his wrist.";
		break;
	}
	var img = document.createElement("img");
	img.src = src;
	img.alt = "Ares Watch";
	img.width = 1600;
	img.height = 900;
	
	document.getElementById("images").appendChild(img);
	document.getElementById("newstitle").innerHTML = newstitle;
	document.getElementById("newscontent").innerHTML = newscontent;
}
