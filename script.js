
function enterLink (value) {
var youTubeLink="https://www.youtube.com/embed/";
value=youTubeLink+value.substring(32);
document.getElementById("video").setAttribute("src", value)
}
document.getElementById("inputLink").oninput=function(){
	var link=document.getElementById("inputLink").value;
	enterLink(link);
}
