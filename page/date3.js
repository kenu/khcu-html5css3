window.onload = function () {
    var date = new Date();
    var now = "Now is " + date;
    document.getElementById("now").innerHTML = now;

    var date2 = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    document.getElementById("today").innerHTML = date2;

    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("time").innerHTML = time;
};