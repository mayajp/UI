
var theaterList = $("theaterList");
$(document).ready(function () {
    function displayTheaterList() {
        $.getJSON('http://api.kendomobilebook.com/api/Theater/Get/?movieId=1'
            , function (theaterData) {
                renderTheater(theaterData);
            });
    }

    $("button.back").on('click', function (e) {
        e.preventDefault();
        window.history.back();
    });
    
    function renderTheater(htmlTheaterData) {
        var htmlTheaterString = "";
        for (i = 0; i < htmlTheaterData.length; i++) {
            htmlTheaterString += "<p class='theaterHeadings'>" + htmlTheaterData[i].Name + " " + htmlTheaterData[i].MilesFromCurrentLoc + " Miles</p>";
            htmlTheaterString += "<p class='address'>" + htmlTheaterData[i].Address + "<hr>";
        }
        console.log(htmlTheaterString);
        $(".theaterList").html(htmlTheaterString);
    }

    displayTheaterList();


});



