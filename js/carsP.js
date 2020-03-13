
window.onhashchange = function() {
window.location.reload(false); 
}



var btn = $("#rs");


btn.on("click",function(){
$("#ID").html(genid());
$('#contactDialog').modal('show');

});



function genid(){
var oldids = getid();
while (1<2){
var id=getRndInteger(10000,99999);
if (oldids.includes(id.toString())){}else{

break;
}
}

return id;
}



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




function getid(){
var ddata;
$.ajax({
    url : "http://gornostay25.pythonanywhere.com/api/getresrv",
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




