//console.log(jsonCarData);

const DEBUGNOSCRIPT = 1;
$(".nav-link").on('click', function(event){$("#navbarNav").collapse("hide");});
document.addEventListener('DOMContentLoaded', function(){
//carsalbum
var obj = JSON.parse(jsonCarData);
var b = obj.length;

var CONTAINER = $("#carsalbum");
var cword = {
"n":"<br>"
}
for (var i=0; i<b; i++){
var opis = obj[i]["details"]["text"];

$.each(cword, function( key, value ) {
   opis=opis.split("{"+key+"}").join(value);
});


    CONTAINER.append('<div id="ClCa-'+i.toString()+'" class="col-md-4"><div class="card mb-4 box-shadow bg-light text-center border border-dark" ><div class="card-header bg-light">'+obj[i]["details"]["name"]+'</div><img class="card-img-bottom" src="'+obj[i]["img"][1]+"0."+obj[i]["img"][2]+'" alt="'+obj[i]["details"]["name"]+'"><div class="card-body"><h5 class="card-title">'+obj[i]["details"]["fname"]+'</h5><p class="card-text">'+opis+'</p><a href="#" class="btn btn-primary">Подробниее</a></div></div></div>');

}

if (!DEBUGNOSCRIPT){
jQuery.get("https://shareimg.gq/api/rw", function(data){
     var d=JSON.parse(data);
     for (var i=0; i<d.length;i++){
     if (i==0){
     $(".spanFromOut").html(d[0]);
     const regexp = /^(\d,\d|\d)/gm;
     
     let fromto = d[0].match(regexp);
     

     $(".persentboxC").html(fromto[0]);
     
     }
     if (i==1){
     $(".spanWhoThink").html(d[1]);
     $("#COM").html("");
     }
     if(i>1){
     $("#COM").append('<div class="fb-post rounded mt-3 mt-md-0  mb-3" data-href="https://www.facebook.com'+d[i]+'"  data-show-text="false"></div>');
     }
     
     }
     FB.init({
     appId      : '674037580005768',
     status     : true,
     xfbml      : true,
     version    : 'v6.0' // or v2.6, v2.5, v2.4, v2.3
     });
 
     console.log($(".fb_iframe_widget").classList);
     
});
}else{
     $("#COM").addClass("bg-secondary");
}
  

});