$(document).ready(function () {
    $(".acc-header").click(function () {
        var $acc = $(this).parent(".panel").find(".acc-body");
        if ($acc.is(":visible")) {
            $(".acc-header").removeClass("acc-header-active");
            $acc.slideUp();
        } else {
            $(".acc-body").slideUp();
            $(".acc-header").addClass("acc-header-active");
            $acc.slideDown();
        }
    });
}); 