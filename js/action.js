// Function for nav bar
// Adapted from http://codepen.io/clokey2k/pen/jgfFD
$(document).ready(function() {
    alert("Hi there we in this.");
    // $sections includes all of the page divs that relate to menu items.
    var $sections = $('.page');
    // The user scrolls
    $(window).scroll(function(event) {
        alert("You scrolled homie. Bless up.")
        var $currentSection;
        var $minDistance = Number.POSITIVE_INFINITY;
        $sections.each(function() {
            // divDistance is the distance(in px) of the head of a div to the head of the view/window
            var $divDistance = Math.abs($(this).offset().top);
            if ($divDistance <= $minDistance) {
                $currentSection = $(this);
                $minDistance = $divDistance;
            }
        });
        console.log("minDistance = " + $minDistance.toString());
        // This is the bit of code that uses the currentSection as its source of ID
        var id = $($currentSection).attr('id');
        $('a').removeClass('active-nav');
        $("[href='#" + id + "']").addClass('active-nav');
    });
});
