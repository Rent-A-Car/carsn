
window.onhashchange = function() {
window.location.reload(false); 
}



$("#rs").on("click",function(){

//$("#ID").html(genid());
$('#contactDialog').modal('show');
setTimeout(reserve,10);
});

$("#more").on("click",function(){

if ($(".coll").hasClass("d-none")){
$(".coll").removeClass("d-none");
}else{
$(".coll").addClass("d-none");
}

});









function reserve(){
var car = window.location.hash.substring(5);
var adds=[];
$(".addl:checked").each(function(){
adds.push($(this).attr("id"));
});

adds=btoa(JSON.stringify(adds));
 
var id = genid();


$.ajax({
    url : "https://gornostay25.pythonanywhere.com/api/setresrv/"+id+"/"+car+"/"+adds,
    type : "GET",
    async: true,
    success : function(data,status) {

    $("#ID").html(data);
    },
    error: function() {
alert("Set id error");
    }
 });
 


}

function genid(){
var oldids = getids();
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




function getids(){
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



