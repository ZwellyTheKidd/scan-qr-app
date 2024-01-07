// check if dom is ready
function domReady(fn) {
    if (document.readyState == "complete" || document.readyState == "interactive") {
        setTimeout(fn, 1)

    } else {
        document.addEventListener("DOMContentLoaded", fn)
    }
}
domReady(function () {
    var myqr = document.getElementById('qr-result')
    //if qr code found
    function onScanSuccess(decodeText) {
        myqr.innerHTML = `<a href="${decodeText}">${decodeText}</a>`
    }
    //render your camera
    var htmlscanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 })
    htmlscanner.render(onScanSuccess)
})



// ==================================
// init DOM elements
const scanElment = document.getElementById('scan');
const historyElement = document.getElementById('ht-list');
const favoriteElement = document.getElementById('fv-list');
const scanResult = document.getElementById('qr-result');





// hide all
function hideDivs() {
    historyElement.classList.add('hidden')
    scanElment.classList.add('hidden')
    favoriteElement.classList.add('hidden')
    scanResult.classList.add('hidden')
}

// show scan
function showScan() {
    hideDivs()
    scanElment.classList.remove('hidden')
    scanResult.classList.remove('hidden')
}


// show history
function showHistory() {

    hideDivs()
    historyElement.classList.remove('hidden')
}

// show favorites 
function showFavorite() {
    hideDivs()
    favoriteElement.classList.remove('hidden')
}


// run this only oce
document.addEventListener('DOMContentLoaded', function () {
    // hide everything

    // show the scan
    showScan();

}, false);



