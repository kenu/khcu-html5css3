$(function () {
    $("#send").on("click", function () {
        var settings = {
            method: "post",
            data: $("#msgform").serialize()
        };
        $.ajax("/register", settings)
            .done(function (data) {
                alert(data);
            });
    });
});