(function (){

var names =["Touheda" , "Akther", "Rabbi" ,"Rabu"];


for (var i = 0; i < name.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();

	if (firstLetter === 't') {
		helloSpeaker.speak(names[i]);
	}else{
		byeSpeaker.speak(names[i]);
	}
}

})();
