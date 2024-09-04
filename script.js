// //your JS code here. If required.
// function delay(ms){
// 	return new Promise(resolve=>setTimeout(resolve,ms));
// }
// asyn function act(){
// 	let txt=document.querySelector("#text").value;
// 	let time=parseInt(document.querySelector("#delay").value,10);
// 	document.querySelector("#output").innerHTML=txt;
// }
function action(){
	document.querySelector("#output").innerHTML=document.querySelector("#text").value;
}
document.querySelector("#btn").addEventListener("click",action);

