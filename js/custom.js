/* When tab is clicked, we grab the id of the tabs
   and call the reload function on the before-after slider
*/

$(".nav-link").click(function () {
  var href = $(this).attr('href');

  $(function(){
    $(href + " .twentytwenty-container").twentytwenty();
  });
});
