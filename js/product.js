function iFrameHeight() {
    var ifm = document.getElementById("iframepage");
    var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;
    if (ifm != null && subWeb != null) {
        ifm.height = subWeb.body.scrollHeight;
    }
}

function zoomIn(event) {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    var img = document.getElementById("image");
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    var xTimes = img.naturalWidth / img.width;
    var yTimes = img.naturalHeight / img.height;
    element.style.backgroundPosition = (-posX * xTimes + 160) + "px " + (-posY * yTimes + 120) + "px";
}

function zoomOut() {
    var element = document.getElementById("overlay");
    element.style.display = "none";
}

var GET = (function () {
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if (typeof (u[1]) == "string") {
        u = u[1].split("&");
        var get = {};
        for (var i in u) {
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

function loadProduct() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "products.xml", false);
    xhttp.send();
    var xml = xhttp.responseXML;
    var arrNodes = xml.getElementsByTagName("id");
    for (i = 0; i < arrNodes.length; i++) {
        if (arrNodes[i].childNodes[0].nodeValue == GET["product"]) {
            document.getElementById("title").innerText = "Product | " + xml.getElementsByTagName("title")[i].childNodes[0].nodeValue;
            document.getElementById("head").innerText = xml.getElementsByTagName("title")[i].childNodes[0].nodeValue;
            document.getElementById("price").innerText = xml.getElementsByTagName("price")[i].childNodes[0].nodeValue;
            document.getElementById("description").innerText = xml.getElementsByTagName("description")[i].childNodes[0].nodeValue;
            document.getElementById("image").src = xml.getElementsByTagName("image")[i].childNodes[0].nodeValue;
            document.getElementById("overlay").style.backgroundImage = "url(" + "\"" + xml.getElementsByTagName("image")[i].childNodes[0].nodeValue + "\")";
            break;
        }
    }
}