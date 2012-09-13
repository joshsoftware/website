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
        bio.fadeIn().addClass("current")
    ).removeClass("current")
    clicked.find("img").stop().animate({opacity:1}, "fast")
    

  $(".thumbnail").on "click", ->
    clicked = $(this)
    teamMember = clicked.data("member")
    console.log(teamMember)
    fadeBio(clicked, $(".bio-" + teamMember))
    return false

  $(".team-bios").hide()
  fadeBio($(".first"), undefined)
  $(".bio.first").fadeIn(->
    
  ).addClass("current")
