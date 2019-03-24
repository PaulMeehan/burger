$(".create-form").on("submit", function (event) {
    // Prevent clicking Enter from triggering event.
    event.preventDefault();

    console.log("in submit");

    const newBurger = {
        burger_name : $("#newBurger").val().trim(),
        devoured : false
    };

    // Send post request
    $.ajax("/api/burger/new", {
        type: "POST",
        data: newBurger
    }).then(() => {
        // Refresj the page
        location.reload();
    });

});

