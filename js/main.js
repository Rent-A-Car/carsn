//console.log(jsonCarData);

$(document).ready(function(){
//carsalbum
jQuery.get("https://shareimg.gq/api/rw", function(data, status){
     var d=JSON.parse(data);
     for (var i=0; i<d.length;i++){
     if (i==0){
     $(".spanFromOut").html(d[0]);
     const regexp = /^\d+/gm;
     
     let array = [...d[0].matchAll(regexp)];
     
     if (array.length>9){
     $(".persentboxC").html(array[0]+array[1]);
     }else{
     $(".persentboxC").html(array[0]);
     }
     }
     if (i==1){
     $(".spanWhoThink").html(d[1]);
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

  
var obj = JSON.parse(jsonCarData);
var b = obj.length;

var CONTAINER = $("#carsalbum");
for (var i=0; i<b; i++){

    CONTAINER.append('<div id="ClCa-'+i.toString()+'" class="col-md-4"></div>');


}	


});