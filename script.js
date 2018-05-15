$(function() {

  $('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    $.getJSON('http://www.omdbapi.com/?apikey=57d13b99&s=' + searchTerm + '&r=json', function(data) {
      showResults(data.Search);
    });
    $.getJSON('http://img.omdbapi.com/?apikey=57d13b99&s=Star Wars&r=json', function(data) {});
  });

  function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
      var imdbID = value.imdbID;
      var url = "http://img.omdbapi.com/?i="
      var poster = value.Poster;
      var imgSrc = url + imdbID + '&apikey=57d13b99';
      html += '<p>' + value.Title + '</p>';
      html += '<img src=' + imgSrc + '>';
    });
    $('#search-results').html(html);
  }
});
