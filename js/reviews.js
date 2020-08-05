
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


    }

});


});


