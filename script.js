$(".text-contents").hide()


$(".lesson-icon").mouseenter(function(){
    var changing = $(this).next().show("text-contents")
    $(".lesson-icon").not(changing).removeClass("text-contents")
})

$(".lesson-icon").mouseleave(function(){
    var change = $(this).next().hide("text-contents")
    $(".lesson-icon").not(change).removeClass("text-contents")
})
