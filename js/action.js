// Function for nav bar
// Adapted from http://codepen.io/clokey2k/pen/jgfFD
$ = jQuery;

// $sections includes all of the page divs that relate to menu items.
var $sections = $('.page');
var $ft = $('#more');

$(function() {
    navbarUpdater();

    // The user scrolls
    $(window).scroll(function() {
        navbarUpdater();
    });
});

function navbarUpdater() {
    var $currentSection;
    var $minDistance = Number.POSITIVE_INFINITY;

    //first check footer since it is not a .page div
    if ($(window).scrollTop() > (3 * $(window).height())) {
        $currentSection = $ft;
    } else {
        $sections.each(function() {
            // divDistance is the distance(in px) of the head of a div to the head of the view/window
            var $divDistance = Math.abs($('body').scrollTop() - $(this).offset().top);
            console.log($(this).attr('id'));
            console.log($divDistance);
            if ($divDistance <= $minDistance) {
                $currentSection = $(this);
                $minDistance = $divDistance;
            }
        });
    }

    // Removes .active-nav from all nav bar options then applies it to appropriate button
    var id = $currentSection.attr('id');
    $('a').removeClass('active-nav');
    $("[href='#" + id + "']").addClass('active-nav');
}

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        $target = $(this.hash);
        $('body').animate({
            scrollTop: $target.offset().top
        }, 1000);
    });
});
