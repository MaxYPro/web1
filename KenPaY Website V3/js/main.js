// kenpaybuilds.com
// Version: 3.0
// Author: MaxYPro


// Loading Screen
$(window).on('load', function () {
    $(".loader").delay(1800);
    $(".loader").fadeOut(1000);
    $(".content").fadeIn(1000);
});


// Discord Copy ID
function copy(copyId) {
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

    document.getElementById("alert").style.display = "block";
    setTimeout(function () {
        document.getElementById("alert").style.display = "none";
    }, 1500);
}
