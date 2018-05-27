if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "s", "sc", "sc6", "sc6u", "sc6ut", "sc6ut.", "sc6ut.t", "sc6ut.tk", "sc6ut.t", "sc6ut.", "sc6ut", "sc6u", "sc6", "sc",];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}