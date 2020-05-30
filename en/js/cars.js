document.addEventListener('DOMContentLoaded', function() {
    //carsalbum


    var obj = JSON.parse(jsonCarData);
    var b = obj.length;

    var CONTAINER = $("#carsalbum");
    var cword = {
        "n": "<br>"
    }
    for (var i = 1; i < b; i++) {
        var opis = obj[i]["details"]["text"];

        $.each(cword, function(key, value) {
            opis = opis.split("{" + key + "}").join(value);
        });
        CONTAINER.append('<div id="ClCa-' + i.toString() + '" class="col-md-4"><div class=" card mb-4 box-shadow bg-light text-center border border-dark border-r-15" ><div class="card-header bg-light ">' + obj[i]["details"]["name"] + '</div><img class="card-img-bottom lazyimg" lazysrc="' + obj[i]["img"][1] + "0." + obj[i]["img"][2] + '" alt="' + obj[i]["details"]["name"] + '"><div class="card-body"><h5 class="card-title">' + obj[i]["details"]["fname"] + '</h5><p class="card-text">' + opis + '</p><a href="cardetails.html?car=' + i.toString() + '"  class="btn btn-primary">More</a></div></div></div>');

    }

setTimeout(function() {
    $(".lazyimg").each(function() {
        $(this).attr("src", $(this).attr("lazysrc"));
        $(this).removeClass("lazyimg");
    });

}, 0);



});


