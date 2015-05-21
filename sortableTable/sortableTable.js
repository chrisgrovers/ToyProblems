/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!
  // select table headers
  // sort for name
  $('#myTable thead tr th:first').on('click', function(element){
    console.log(element);
    console.log(this);
    // sort by name
    // select first child of each tbody tr, and order by name
    $("#myTable tr td:first-child").
  });
  // sort for number of pounds
  $('#myTable thead tr th:nth-child(2)').on('click', function(element){
    console.log(element);
    console.log(this);
  });
  // price per pound
  $('#myTable thead tr th:nth-child(3)').on('click', function(element){
    console.log(element);
    console.log(this);
  });
  // exp date
  $('#myTable thead tr th:nth-child(4)').on('click', function(element){
    console.log(element);
    console.log(this);
  });

  // headers on click
    // function that sorts table

});

