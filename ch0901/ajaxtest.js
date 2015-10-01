function init() {
    document.getElementById("ajaxBtn").onclick = function () {
        makeRequest('ajtest.html');
    };

    var xhr;

    function makeRequest(url) {
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        if (!xhr) {
            alert('Ajax를 지원하지 않는 브라우저입니다...');
            return false;
        }
        xhr.onreadystatechange = alertContents;
        xhr.open('GET', url);
        xhr.send();
    }

    function alertContents() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert(xhr.responseText);
            } else {
                alert('서버에 이상이 있습니다. status:' + xhr.status);
            }
        }
    }
}

window.onload = init;