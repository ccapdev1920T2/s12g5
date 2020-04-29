$(".delete").on("click", function() {
  $( this ).remove();
});

$(document).on("click", ".remove", function() {
  $(this).parent().parent().parent().remove();
});
