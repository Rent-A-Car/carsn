//console.log(jsonCarData);
//pre load document

$(".slka").on('click', function(event) {
    $("#navbarNav").collapse("hide");
});

//on document load




function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}









$(document).ready(function(){
	if (getCookie("langok") != "ok"){
    var userLang = (navigator.language || navigator.userLanguage).substring(0,2);
    var docLang = $('html').attr('lang');
	if (userLang != docLang){
    switch(userLang) {
  case 'uk':
	showLangAlert('uk');
    break;
  case 'ru':
	showLangAlert('ru');
    break;
  default:
	showLangAlert('en');
    break;
    
}
}
}
    
      
});

function showLangAlert(lang){

	switch(lang) {
		case 'en':
			var altitle="We also speak English";
			var albody="If you want to use the English version of the site.";
			var allink="Click here!";
			var linkp="/en/"+window.location.pathname.split("/").pop()+location.search;

			break;
		case 'uk':
			var altitle="Ми теж говоримо по-українськи";
			var albody="Якщо ви хочете використовувати українську версію сайту.";
			var allink="Натисніть тут!";
			var linkp="/ua/"+window.location.pathname.split("/").pop()+location.search;
			break;
		case 'ru':
			var altitle="Мы также говорим по-русски";
			var albody="Если вы хотите использовать русскую версию сайта.";
			var allink="Кликните здесь!";
			var linkp=window.location.pathname.substring(3)+location.search;
			break;

	}




	$("body").after(`
	<div aria-live="polite" aria-atomic="true" class="" style="position:absolute;right:2%;top: 5em;text-align: center;min-height: 200px;">

	<div class="toast" data-autohide="false">
    <div class="toast-header">
        <strong class="mr-auto">
	<i class="fa fa-language"></i> `+altitle+`
	</strong>

        <small></small>

        <button onclick="setCookie('langok','ok',30)" type="button" class="ml-2 mb-1 close" data-dismiss="toast">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="toast-body">
        <div>`+albody+` <a href="`+linkp+`">`+allink+`</a></div>
    </div>
</div>

</div>
`);
	 $('.toast').toast("show");
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
