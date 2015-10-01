$(function () {
    $("#ajaxBtn").on("click", function () {
        $.ajax('ajtest.html')
            .done(function (data) {
                alert(data);
            })
            .fail(function (xhr) {
                alert("서버 이상. status:" + xhr.status);
            });
    });
});