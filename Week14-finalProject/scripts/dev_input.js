//this script is for data collection on the form of



$(document).ready(function() {
    //arrays to store data for submission
    
    let submissions = [];
    let clicked = false;

    $("#dev-form-container").submit(function(event) {
        event.preventDefault();
        
        //conditional to make sure submission can only happen once
        //per page load

        if (!clicked) {
            //get input from form
            let email = $("#email-input").val();
            let name = $("#name-input").val();
            let comment = $("#message-input").val();

            let submission = {
                email: email,
                name: name,
                comment: comment
            };

            //write submission to outer array for processing
            submissions.push(submission);

            //clear inputs
            $("#email-input").val('');
            $("#name-input").val('');
            $("#comment-input").val('');

            console.log(submissions);

            let message = $('<div class="submit-message" style="text-align: center; font-size: 18px; margin: 15px 0px; transistion: 0.5s ease-in;">Thank you for sharing ' + name + "!<br>I will reach out to you soon!</div>");

            $("#dev-form-button").after(message.hide());
            message.fadeIn(500);

            clicked = true;
        } else {
            $('.submit-message').html("You can only submit once!");
        }

        if (clicked) {
            $('.submit-message').animate({
                left: "5px",
                right: "10px",
                left: "0px"
            }, 500);
        }
    });
});