$(document).ready(function() {
    $(".remove").click(function(){
        console.log("hello")
        var id = $(this).val();
        console.log(id)
        $.get('/deletePin', {_id: id}, function(result) {
        })
    })
});
