//quick script for changing styles
//on music page

$(document).ready(function() {
    
    $('.q-img').hover(
        function() {
            $('.q-text').stop(true, false).css("color", "white").animate({
                paddingTop: "10px",
                fontSize: "37px"
            }, 300);
        },
        function() {
            $('.q-text').stop(true, false).css("color", "").animate({
                paddingTop: "0px",
                fontSize: "25px"
            }, 1000);
        }
    );

    $('.b-img').hover(
        function() {
            $('.b-text').stop(true, false).css("color", "white").animate({
                paddingTop: "10px",
                fontSize: "37px"
            }, 300);
        },
        function() {
            $('.b-text').stop(true, false).css("color", "").animate({
                paddingTop: "0px",
                fontSize: "25px"
            }, 1000);
        }
    );
});