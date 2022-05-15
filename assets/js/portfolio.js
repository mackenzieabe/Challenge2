$(document).ready(function() {
$(".acc-header").click(function() {
var $acc = $(this).parent(".panel").find(".acc-body");
    if ($acc.is(":visible") ) {
        $acc.slideUp();
    } else { 
        $(".acc-body").slideUp();
        $acc.slideDown();

    }
});



}); 