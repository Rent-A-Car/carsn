var isgoodID=0;
ga('send', 'pageview', "/car/"+($("#mcid").attr("carid")).toString());




/*
window.onhashchange = function() {
window.location.reload(false);
}

*/
$("#ID").on("click",function(){
if (isgoodID == 1){


var copyText = document.getElementById("IDt");
$("#IDt").show();
$("#IDt").val("(ID заказа #"+$("#ID").text()+") ");
copyText.select();
copyText.setSelectionRange(0, 99999);
document.execCommand("copy");
$("#IDt").hide();

$('#ID').tooltip('show');
}
});



$("#rs").on("click",function(){

//$("#ID").html(genid());
$('#contactDialog').modal('show');
setTimeout(reserve,10);
});

//more

$("#more").on("click",function(){

if ($(".coll").hasClass("d-none")){
$(".coll").removeClass("d-none");
}else{
$(".coll").addClass("d-none");
}

});









function reserve(){
var car = $("#mcid").attr("carid");
var adds=[];
$(".addl:checked").each(function(){
adds.push($(this).attr("id"));
});

adds=btoa(JSON.stringify(adds));
var userLang = navigator.language || navigator.userLanguage; 
userLang=btoa(userLang);

var id = genid();


$.ajax({
    url : "https://gornostay25.pythonanywhere.com/api/setresrv/"+id+"/"+car+"/"+adds+"/"+userLang,
    type : "GET",
    async: true,
    success : function(data,status) {

    $("#ID").html(data);
    $("#IDt").html(data);
    isgoodID = 1;

    gtag('event', 'reserve', {
    'event_category': 'CAR',
    'event_label': 'car-'+car+"/id-"+data,
    'event_callback': function(){
    console.log("sended");
    }
    });
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
