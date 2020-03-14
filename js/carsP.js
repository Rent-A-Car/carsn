
window.onhashchange = function() {
window.location.reload(false); 
}



var btn = $("#rs");


btn.on("click",function(){

//$("#ID").html(genid());
$('#contactDialog').modal('show');
setTimeout(reserve,0);
});


function reserve(){
var car = window.location.hash.substring(5);
var headers = "";
var adds="dhhd";
var datet ="ttt";
var datef="fff";


$.ajax({
    url : "https://httpbin.org/headers",
    type : "GET",
    async: false,
    success : function(data,status) {
headers=btoa(data.headers["Accept-Language"]);
    },
    error: function() {
alert("Get headers error");
    }
 });
 
 
 
 
 
 
var id = genid();


$.ajax({
    url : "https://gornostay25.pythonanywhere.com/api/setresrv/"+id+"/"+car+"/"+datef+"/"+datet+"/"+adds+"/"+headers,
    type : "GET",
    async: true,
    success : function(data,status) {

    $("#ID").html(data);
    },
    error: function() {
alert("Get id error");
    }
 });
 


}

function genid(){
var oldids = getid();
while (1<2){
var id=getRndInteger(10000,99999);
if (oldids.includes(id.toString())){}else{

break;
}
}

return id.toString();
}



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




function getid(){
var ddata;
$.ajax({
    url : "https://gornostay25.pythonanywhere.com/api/getresrv",
    type : "GET",
    async: false,
    success : function(data,status) {
ddata=data;
    },
    error: function() {
alert("Get id error");
    }
 });
return JSON.parse(ddata);

}




