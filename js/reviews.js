
document.addEventListener('DOMContentLoaded', function() {

jQuery.get("https://shareimg.gq/api/rw", function(data) {
    var d = JSON.parse(data);
    for (var i = 0; i < d.length; i++) {
        if (i == 0) {
            $(".spanFromOut").html(d[0]);
            const regexp = /^(\d,\d|\d)/gm;

            let fromto = d[0].match(regexp);


            $(".persentboxC").html(fromto[0]);

        }
        if (i == 1) {
            $(".spanWhoThink").html(d[1]);
            $("#COM").html("");
        }
        if (i > 1) {
            $("#COM").append('<div class="fb-post rounded mt-3 mt-md-0  mb-3" data-href="' + d[i] + '"  data-show-text="false"></div>');
            //console.log(d[i]);
        }

    }
    FB.init({
        appId: '674037580005768',
        status: true,
        xfbml: true,
        version: 'v6.0' // or v2.6, v2.5, v2.4, v2.3
    });

    console.log($(".fb_iframe_widget").classList);
    
});



});



