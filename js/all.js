//console.log(jsonCarData);
//pre load document

$(".slka").on('click', function(event) {
    $("#navbarNav").collapse("hide");
});

//on document load

$(document).redy(function(){
    //var userLang = navigator.language || navigator.userLanguage; 
    //var docLang = $('html')[0].attr('lang');
    
      
});


function alrt(){
    var userLang = navigator.language || navigator.userLanguage; 
    var docLang = $('html')[0].attr('lang');
    alert(docLang);
    }

/*
$.ajax({ 
    url: "http://ajaxhttpheaders.appspot.com", 
    dataType: 'jsonp', 
    success: function(headers) {
        language = headers['Accept-Language'];
        nowDoSomethingWithIt(language);
    }
});
*/
