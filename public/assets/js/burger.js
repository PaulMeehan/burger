// $(".create-form").on("submit", function (event) {

function addBurger() {
    // Prevent clicking Enter from triggering event.
    event.preventDefault();

    console.log("in submit");

    const newBurger = {
        burger_name : $("#newBurger").val().trim(),
        devoured : 0
    };

    // Send post request
    $.ajax("/api/burger/new", {
        type: "POST",
        data: newBurger
    }).then(() => {
        // Refresj the page
        location.reload();
    });

};


// $(".change-devoured").on("click", function(event) {
function devourIt(thisId) {
    // const id= $(this).data("id");

    const newDevoured = {
        devoured : 1
    };

    $.ajax("/api/burger/update/" + thisId, {
        type: "PUT",
        data: newDevoured
    }).then(() => {
        location.reload();
    });

};