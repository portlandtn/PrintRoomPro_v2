//These variables will populate from the database based on job # input on
//the home screen.
var CSR = "Jedidiah May";
var builder = "Jones Construction";
var state = "TN";

var jobNumber = "K12A0205A";
var issueNumber = 1;
var revisionCode = 4;
var currentDate = "9/25/2018";
var omittedFabs = "R1, R18";
var group1ShipperPages = "1-2, 9";
var group1Fabs = "R2-R17, R21-R22";
var group2_3ShipperPages = "3-8";
var group2_3Fabs = "R19-R20";
var group4ShipperPages = "9-11, 15";
var group5ShipperPages = "12-14";
var group6ShipperPages = "16-21";
var group6Fabs = "R23-R25";
var group7ShipperPages = "22-30";
var group8ShipperPages = "31-32";
var panelCutlistPages = "33";
var stockCoilSummary = "34";

$(document).ready(function () {
    $('.CSR_name').text(CSR);
    $('.bldrName').text(builder);
    $('#state_initials').text(state);
    $('#jobNumberBox').text(jobNumber);
    $('#bldrBox').text(builder);
    $('#issueBox').text(issueNumber);
    $('#currentDate').text(currentDate);
    $('#omittedFabs').text(omittedFabs);
    $('#group1ShipperPages').text(group1ShipperPages);
    $('#group1Fabs').text(group1Fabs);
    $('#group2_3ShipperPages').text(group2_3ShipperPages);
    $('#group2_3Fabs').text(group2_3Fabs);
    $('#group4ShipperPages').text(group4ShipperPages);
    $('#group5ShipperPages').text(group5ShipperPages);
    $('#group6ShipperPages').text(group6ShipperPages);
    $('#group6Fabs').text(group6Fabs);
    $('#group7ShipperPages').text(group7ShipperPages);
    $('#group8ShipperPages').text(group8ShipperPages);
    $('#panelCutlistPages').text(panelCutlistPages);
    $('#stockCoilSummary').text(stockCoilSummary);

    switch (revisionCode) {
        case "0":
            break;
        case 1:
            $('#revcode1').css("background-color", "darkgray");
            break;
        case 2:
            $('#revcode2').css("background-color", "darkgray");
            break;
        case 3:
            $('#revcode3').css("background-color", "darkgray");
            break;
        case 4:
            $('#revcode4').css("background-color", "darkgray");
            break;
        case 5:
            $('#revcode5').css("background-color", "darkgray");
            break;
        case 6:
            $('#revcode6').css("background-color", "darkgray");
            break;
        case 7:
            $('#revcode7').css("background-color", "darkgray");
            break;
        case 8:
            $('#revcode8').css("background-color", "darkgray");
            break;
        case 9:
            $('#revcode9').css("background-color", "darkgray");
            break;
    }
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

function show_hide_StateSeal() {
    var checkBox_StateSeal = document.getElementById("chk_seals");

    var label_StateSeal = document.getElementById("state");

    if (checkBox_StateSeal.checked == true) {
        label_StateSeal.style.display = "inline";
    }
    else {
        label_StateSeal.style.display = "none";
    }
}

function populateRoutingSheetData() {

    $("#jobNumberBox").text(jobNumber);
    $("#bldrBox").text(Bldr);
}

function submit_action() {
    alert("yo, sup?")
}