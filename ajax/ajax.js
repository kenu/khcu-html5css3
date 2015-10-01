var xhr = null;

function getXHR() {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            xhr = new ActiveXObejct("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xhr = new ActiveXObejct("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
}

function stateChange() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
}

function requestAjax(url, params) {
    getXHR();
    xhr.onreadystatechange = stateChange;
    url = url + params;
    xhr.open("POST", url, true);
    xhr.send("");
}