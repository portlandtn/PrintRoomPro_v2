var CSR = "Jody Woodall";
var Bldr = "Jones Construction";

$(document).ready(function () {
    $("#CSR_name").text(CSR);
    $('#Bldr_name').text(Bldr);
});

function show_hide_manual_checkboxes() {
    var checkBox_manual = document.getElementById("manual");

    var checkBox_KL2100s = document.getElementById("KL2100s");
    var label_KL2100s = document.getElementById("label_KL2100s");
    var checkBox_KL2100m = document.getElementById("KL2100m");
    var label_KL2100m = document.getElementById("label_KL2100m");
    var checkbox_SS360 = document.getElementById("SS360");
    var label_SS360 = document.getElementById("label_SS360");
    var checkBox_RoofLok = document.getElementById("RoofLok");
    var label_RoofLok = document.getElementById("label_RoofLok");
    var checkBox_AWIP = document.getElementById("AWIP");
    var label_AWIP = document.getElementById("label_AWIP");

    if (checkBox_manual.checked == true) {
        checkBox_KL2100m.style.display = "inline";
        label_KL2100m.style.display = "inline";
        checkBox_KL2100s.style.display = "inline";
        label_KL2100s.style.display = "inline";
        checkbox_SS360.style.display = "inline";
        label_SS360.style.display = "inline";
        checkBox_RoofLok.style.display = "inline";
        label_RoofLok.style.display = "inline";
        checkBox_AWIP.style.display = "inline";
        label_AWIP.style.display = "inline";
    }
    else {
        checkBox_KL2100m.style.display = "none";
        label_KL2100m.style.display = "none";
        checkBox_KL2100s.style.display = "none";
        label_KL2100s.style.display = "none";
        checkbox_SS360.style.display = "none";
        label_SS360.style.display = "none";
        checkBox_RoofLok.style.display = "none";
        label_RoofLok.style.display = "none";
        checkBox_AWIP.style.display = "none";
        label_AWIP.style.display = "none";
    }
}