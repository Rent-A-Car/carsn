//console.log(jsonCarData);
const DEBUGNOSCRIPT = 0;
$(".nav-link").on('click', function(event){$("#navbarNav").collapse("hide");});
$(document).ready(function(){
//carsalbum
if (!DEBUGNOSCRIPT){
jQuery.get("https://shareimg.gq/api/rw", function(data, status){
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
  
var obj = JSON.parse(jsonCarData);
var b = obj.length;

var CONTAINER = $("#carsalbum");
for (var i=0; i<b; i++){

    CONTAINER.append('<div id="ClCa-'+i.toString()+'" class="col-md-4"><div class="card mb-4 box-shadow bg-light text-center border border-dark" ><div class="card-header bg-light">Mercedes b200</div><img class="card-img-bottom" src="img/b200/b200_0.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Mercedes b200 2.0CDI</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Детальние</a></div></div></div>');


}	


});