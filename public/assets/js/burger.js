$(document).ready(function () {
    $(".create-form").on("submit", function (event) {

        // Prevent clicking Enter from triggering event.
        event.preventDefault();

        const newBurger = {
            burger_name : $("#newBurger").val().trim(),
            devoured : 0
        };

        $.ajax("/api/burger/new", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        });

    });


    $(".change-devoured").on("click", function(event) {
        const thisId = $(this).attr("data-id");

        const newDevoured = {
            devoured : 1
        };

        $.ajax("/api/burger/update/" + thisId, {
            type: "PUT",
            data: newDevoured
        }).then(() => {
            location.reload();
        });

    });
});