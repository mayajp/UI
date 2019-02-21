var movieList = $("movieList");
var btnNowPlaying = $("btnNowPlaying");
var btnComingSoon = $("btnComingSoon");
var btnAZ = $("btnAZ");
var url = "http://api.kendomobilebook.com/api/Movies/GetMovieList/?listType="
var listType = 0;
var activeList = "";
var backurl = "movie.html";
var theaterList = $("theaterList");
$(document).ready(function () {
    function displayMovieList(listType) {
        $.getJSON(url + listType, function (htmlData) {
            renderHTML(htmlData);
        });
    }
    //function displayTheaterList() {
    // $.getJSON('http://api.kendomobilebook.com/api/Theater/Get/?movieId=1'
    //   , function (htmlTheaterData) {
    //       renderTheator(htmlTheaterData);
    //  });
    //}
    $("#btnNowPlaying").click(function () {
        $("#btnNowPlaying").css({ 'background-color': 'orange' });
        $("#btnComingSoon").css({ 'background-color': 'gray' });
        $("#btnAZ").css({ 'background-color': 'gray' });
        displayMovieList(0);
    });
    $("#btnComingSoon").click(function () {
        $("#btnComingSoon").css({ 'background-color': 'orange' });
        $("#btnNowPlaying").css({ 'background-color': 'gray' });
        $("#btnAZ").css({ 'background-color': 'gray' });
        displayMovieList(1);
    });
    $("#btnAZ").click(function () {
        $("#btnAZ").css({ 'background-color': 'orange' });
        $("#btnComingSoon").css({ 'background-color': 'gray' });
        $("#btnNowPlaying").addClass("Apply-graycolor");
        displayMovieList(2);
    });
    $("button.movies.style").click(function () {
        window.open(href = "movie.html", "_self");
        //$.get("movies style")
    });
    $("button.trailers.style").click(function () {
        var getlink = window.open(href = "moviesPage1.html", "_self");

        //$.get("moviesPage1.html")
        //$("location").attr("href", "http://127.0.0.1:8080/moviesPage1.html")
        //var referrer = document.referrer;
        //var pathname = window.location.pathname;

    });
    $("button.back").on('click', function (e) {

        history.replaceState('Hi', null, 'http://127.0.0.1:8080/movie.html', '_self');
        e.preventDefault();
        window.history.back();
        return false;
        //console.log(Hi);
    });

});

function renderHTML(htmlData) {
    var htmlString = "";

    for (i = 0; i < htmlData.length; i++) {

        htmlString += "<img class='image' src=" + htmlData[i].Image + " />";
        htmlString += "<h2 class='heading'>" + htmlData[i].Name + "</h2>";
        htmlString += "<p class='discription'>" + htmlData[i].Genre + " " + htmlData[i].Length + "mins " + htmlData[i].Rating + "</p>" + "<hr>";

        htmlString += "<a href='theater.html'>next</a>";
    }
    console.log(htmlString);
    $("#movieList").html(htmlString);
}
//function renderTheator(htmlTheaterData) {
  //  var htmlTheaterString = "";
  //  for (i = 0; i < htmlTheaterData.length; i++) {
   //     htmlTheaterString += "<h2 class='theaterHeadings'>" + htmlTheaterData[i].Name + "</h2>";
        //htmlTheaterString += "<p class='address'>" + htmlTheaterData[i].
    //}
    //console.log(htmlTheaterString);
    //$("theaterList").html(htmlTheaterString);
//}
