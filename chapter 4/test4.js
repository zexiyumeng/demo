function showPic(whichpic) {
	if(!document.getElementById("placeholder")) {
		return false;
	}
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	if(document.getElementById("description")) {
		var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"没有找到title";
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	}
	return true;
}

window.onload = prepareGallery();

function prepareGallery() {
	if(!document.getElementById || !document.getElementsByTagName) {
		return false;
	}
	if(!document.getElementById("prepareGallery")) {
		return false;
	}
	var galley = document.getElementById("prepareGallery");
	var links = galley.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			showPic(this);	
			return false;
		}
	}
}
 
//window.onload = prepareLinks;
//
//function prepareLinks() {
//	var links = document.getElementsByTagName("a");
//	for(i = 0; i < links.length; i++) {
//		if(links[i].getAttribute("class") == "popup") {
//			links.onclick = function() {				
//				return false;
//			}
//		}
//	}
//}

//function countBodyChilder() {
//	var body_element = document.getElementsByTagName("body")[0];
//	alert(body_element.childNodes.length);
//}
//window.onload = countBodyChilder;

//var description = document.getElementById("description");
//alert(description.childNodes[0].nodeValue);

//高程上是相等的,这里为什么不等?
//var html = document.documentElement;   
//alert(html === document.childNodes.item(0));                 false;
//alert(html === document.firstChild);                         false;
//alert(document.childNodes.item(0)===document.firstChild);    true;