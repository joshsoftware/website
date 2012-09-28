jQuery ($) ->

  # Potfolio
  $("#sticker").sticky({topSpacing:10});

  $(".portfolio-menu a").click (event) ->
    scrollToElement = $($(this).attr("href"))
    $.scrollTo.window().queue([]).stop();
    $.scrollTo scrollToElement, "easeOut", {offset:-10}
    event.preventDefault()



  # Team Members
  fadeBio = (clicked, bio) ->
    $(".team-thumbnails .thumbnail img").stop().animate({opacity:.5}, "fast")
    $(".current").fadeOut(->
      if bio isnt undefined
        console.log(bio)
        bio.fadeIn().addClass("current")
    ).removeClass("current")
    clicked.find("img").stop().animate({opacity:1}, "fast")
    

  $(".thumbnail").on "click", ->
    clicked = $(this)
    teamMember = clicked.data("member")
    fadeBio(clicked, $(".bio-" + teamMember))
    return false

  $(".team-bios").hide()
  $(".bio.first").fadeIn(->
    
  ).addClass("current")
  # Workaround for the first team content opacity is getting set to 0
  $(".bio.first").attr("style","opacity:.5")
