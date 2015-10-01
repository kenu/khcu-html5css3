function init() {
    $("#ajaxBtn").on("click", function () {
        makeRequest('ajtest.html');
    });

    function makeRequest(url) {
        $.ajax(url)
            .done(function (data) {
                alert(data);
            })
            .fail(function (xhr) {
                alert("서버 이상. status:" + xhr.status);
            });
    }
}

$(init);