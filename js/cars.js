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
var myWindow = window.open("", i.toString()+"-"+obj[i], "");
myWindow.document.write(`
<!doctype html>
<html>

<head>
    <!-- Required meta tags -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Аренда автомобилей (`+obj[i]["details"]["name"]+`)</title>
    <!--    CSS      -->

    <link rel="stylesheet" href="css/all.css?vbnvcgnlj">
    <link rel="stylesheet" href="css/carsP.css?vbnnvcgnlj">
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
                    <a class="nav-link" href="cars.html">Машины (`+obj[i]["details"]["name"]+`)</a>
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

  
        
        


        

        <script src="js/data.js?hfkiz64jk"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <script src="js/all.js?hdbhdb"></script>
        <script src="js/carsP.js?hdbhdb"></script>

</body>

</html>


`);


}





