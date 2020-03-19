var isgoodID=0;
/*ga('send', 'pageview', "/car/"+($("#mcid").attr("carid")).toString());*/




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

function opmore(){
if ($(".coll").hasClass("d-none")){
$(".coll").removeClass("d-none");
}else{
$(".coll").addClass("d-none");
}
}








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



function carInfo(i){
var obj = JSON.parse(jsonCarData);
var imgsrc = "";
var imgindk = "";
for (var ii=0;ii<obj[i]["img"][0];ii++){
if(ii==0){
imgindk=imgindk+'<li data-target="#cC" data-slide-to="'+ii.toString()+'" class="active"></li>';
imgsrc=imgsrc+'<div class="carousel-item active"><img src="'+obj[i]["img"][1]+ii.toString()+"."+obj[i]["img"][2]+'" class="d-block w-100" alt="'+obj[i]["details"]["name"]+'"></div>';
} else{
imgindk=imgindk+'<li data-target="#cC" data-slide-to="'+ii.toString()+'"></li>';
imgsrc=imgsrc+'<div class="carousel-item"><img src="'+obj[i]["img"][1]+ii.toString()+"."+obj[i]["img"][2]+'" class="d-block w-100" alt="'+obj[i]["details"]["name"]+'"></div>';
}
}
var tableD="";
y = 0;
for (var k in obj[i].details)
{
  if (y > 2)
  {
  if(y<7){
  tableD=tableD+"<tr><th>"+k+"</th><td>"+obj[i].details[k]+"</td></tr>";
  }else{
    tableD=tableD+"<tr class='d-none coll'><th>"+k+"</th><td>"+obj[i].details[k]+"</td></tr>";
  }
  
  };
  y = y+ 1
};

var tableA='';
if(obj[i]["additional"]){
for(var x=0;x<obj[i]["additional"].length;x++){

var xx=obj[i]["additional"][x];

tableA=tableA+'<tr><th class="col-10"><label class="w-100" ><div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input addl" id="'+xx.id+'"><label class="custom-control-label" for="'+xx.id+'">'+xx.name+'</label></div></label></th><td class="text-right">'+xx.price+'</td></tr>';

}

}






var myWindow = window.open("","_self", "");
myWindow.document.write(`
<!doctype html>
<html>
   <head>

   
   <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160826750-1"></script>
   <script>
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   

   gtag('config', 'UA-160826750-1', {
   'page_title' : 'car `+i.toString()+`',
   'page_path': '/car/`+i.toString()+`'
   });
   </script>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta id="mcid" carid="`+i.toString()+`">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Аренда автомобилей (`+obj[i]["details"]["name"]+`)</title>
      <!--    CSS      -->
      <link rel="stylesheet" href="css/all.css?vbnvcgnlj">
      <style>
         .social a {
         text-align: center;
         width: 48px;
         height: 48px;
         float: left;
         background: #fff;
         border: 1px solid #ccc;
         box-shadow: 0 2px 4px rgba(0,0,0,0.15), inset 0 0 50px rgba(0,0,0,0.1);
         border-radius: 24px;
         margin: 0 10px 10px 0;
         padding: 6px;
         color: #000;
         }
         .instagram a:hover {background: #3f729b; color: #fff;}
         .facebook a:hover {background: #3b5998; color: #fff;}
         .whatsapp a:hover {background: #50b154; color: #fff;}
         .viber a:hover {background: #665CAC; color: #fff;}
      </style>
      <!-- <link rel="stylesheet" href="css/carsP.css?vbnnvcgnlj"> -->
   </head>
   <body id="home">
      <nav class="navbar navbar-dark bg-dark navbar-expand-md sticky-top">
         <h1 class=" navbar-brand">Аренда авто Черногория</h1>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse d-md-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <a class="nav-link" href="index.html">Главная</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link active" href="cars.html">Машины (`+obj[i]["details"]["name"]+`)</a>
               </li>
               <!--
                  <li class="nav-item" >
                      <a class="nav-link" href="#servises" >Дополнительные услуги</a>
                  </li>
                  -->
               <li class="nav-item">
                  <a class="nav-link" href="contacts.html">Контакты</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="reviews.html">Отзывы</a>
               </li>
            </ul>
         </div>
      </nav>
      <div class="container-fluid jumbotron bg-white" >
         <div class="row">
            <div class="col-md-4" >
               <div id="cC" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                  `+imgindk+`
                  </ol>
                  <div class="carousel-inner">
  `+imgsrc+`
                  </div>
                  <a class="carousel-control-prev" href="#cC" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Предыдущия</span>
                  </a>
                  <a class="carousel-control-next" href="#cC" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Следующия</span>
                  </a>
               </div>
            </div>
            
            <div class="col-md-8 mt-4 mt-md-0" >
               <table class="table table-bordered m-0" style="background-color:#e9ecef;">
               
               `+tableD+`
            
            </table>
            
            <a href="javascript:opmore();" class="btn btn-sm btn-secondary mt-1"  id="more" >ещё</a>
         
         
         
         
         <table class="mt-3 w-100 table ">
         
`+tableA+`         
         
         </table>
         
         
         
         
         
         
         
         </div>
         
         
     
     
     
     </div>
      
      
      
      
      <div class="row mt-3" >
         <div class="col-12 d-flex justify-content-end" >
            <button id="rs" class="btn btn-primary btn-lg" >Заказать</button>
         </div>
      </div>
      
      
      
      </div> <!-- main container -->
      
   
   <div class="modal fade" id="contactDialog" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="contactDialogTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="contactDialogTitle">Свяжитесь с нами</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body ">
               <div class="text-center">ID вашего заказа <kbd>#<span id="ID"  data-title="Текст скопирован">wait...</span></kbd><input id="IDt" value="ok" style="display:none"></div>

               <hr>
               <div class="d-flex justify-content-center" >
                  <div class="social instagram">
                     <a href="https://www.instagram.com/montenegro_arenda/" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
                  </div>
                  <div class="social facebook">
                     <a href="https://www.facebook.com/montenegroarenda/" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>    
                  </div>
                  <div class="social whatsapp">
                     <a href="https://wa.me/38268555972" target="_blank"><i class="fa fa-whatsapp fa-2x"></i></a>
                  </div>
                  <div class="social viber">
                     <a href="viber://chat?number=38268555972" target="_blank"><i class="fab fa-viber fa-2x"></i></a>    
                  </div>
               </div>
            </div>
<div class="modal-footer d-block p-0 m-0">
<span><small>*Отошлите етот ID нам чтобы продолжить</small></span>

</div>
         </div>
      </div>
   </div>
   
   <script src="js/data.js?hfkiz64jk"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
   <script src="js/all.js"></script>
   <script src="js/carsP.js"></script>
   

   
   
   
   </body>
</html>
`);


}