//console.log(jsonCarData);
//pre load document

$(".slka").on('click', function(event) {
    $("#navbarNav").collapse("hide");
});

//on document load

$(document).ready(function(){
    var userLang = navigator.language || navigator.userLanguage; 
    var docLang = $('html').attr('lang');
    
    
      
});



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
