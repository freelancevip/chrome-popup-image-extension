var chromePopupImageExtensionID = 'chrome-popup-image-extension';

function closeChromePopupImageExtension() {
    document.getElementById(chromePopupImageExtensionID).style.display = "none";
}

function createPopup() {
    var div = document.createElement('div');
    var imagePath = chrome.extension.getURL('image.png');
    div.id = chromePopupImageExtensionID;
    div.innerHTML = "<img src='" + imagePath + "'>";
    div.style.display = "none";
    div.onclick = closeChromePopupImageExtension;
    document.body.appendChild(div);
}

window.onload = function () {
    createPopup();
    var code = 'Backquote';
    document.body.onkeypress = function (event) {
        event = event || window.event;
        if (event.code === code) {
            document.getElementById(chromePopupImageExtensionID).style.display = "block";
        }
    };
};