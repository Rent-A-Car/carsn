document.addEventListener('DOMContentLoaded', function() {
    //carsalbum
    var obj = JSON.parse(jsonCarData);
    var b = obj.length;

    var CONTAINER = $("#carsalbum");
    var cword = {
        "n": "<br>"
    }
    for (var i = 0; i < b; i++) {
        var opis = obj[i]["details"]["text"];

        $.each(cword, function(key, value) {
            opis = opis.split("{" + key + "}").join(value);
        });
        CONTAINER.append('<div id="ClCa-' + i.toString() + '" class="col-md-4"><div class="card mb-4 box-shadow bg-light text-center border border-dark" ><div class="card-header bg-light">' + obj[i]["details"]["name"] + '</div><img class="card-img-bottom lazyimg" lazysrc="' + obj[i]["img"][1] + "0." + obj[i]["img"][2] + '" alt="' + obj[i]["details"]["name"] + '"><div class="card-body"><h5 class="card-title">' + obj[i]["details"]["fname"] + '</h5><p class="card-text">' + opis + '</p><a href="#" onclick="carInfo('+i.toString()+');" class="btn btn-primary">Подробниее</a></div></div></div>');

    }

setTimeout(function() {
    $(".lazyimg").each(function() {
        $(this).attr("src", $(this).attr("lazysrc"));
        $(this).removeClass("lazyimg");
    });

}, 0);



});





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
var table="";
y = 0;
for (var k in obj[i].details)
{
  if (y > 3)
  {
  table=table+"<tr><th>"+k+"</th><td>"+obj[i].details[k]+"</td></tr>";
  };
  y = y+ 1
};

var myWindow = window.open("",i.toString()+"-"+obj[i], "");
myWindow.document.write(`
<!doctype html>
<html>

<head>
    <!-- Required meta tags -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Аренда автомобилей (`+obj[i]["details"]["name"]+` №`+(i+1).toString()+`)</title>
    <!--    CSS      -->

    <link rel="stylesheet" href="css/all.css?vbnvcgnlj">
    <link rel="stylesheet" href="css/carsP.css?vbnnvcgnlj">
</head>

<body id="home" >

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
            <table class="table table-bordered table-secondary" >
 
            `+table+`
 
            </table>
        </div>
        
        
        </div>
</div>
        

        <script src="js/data.js?hfkiz64jk"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <script src="js/all.js?hdbhdb"></script>
        <script src="js/carsP.js?hdbhdb"></script>

</body>

</html>

`);


}





