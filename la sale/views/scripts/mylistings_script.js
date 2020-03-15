$(".delete").on("click", function() {
  console.log("hello?");
  $( this ).remove();
});

$(document).on("click", ".remove", function() {
  $(this).parent().parent().parent().parent().remove();
});
