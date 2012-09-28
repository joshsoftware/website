jQuery ($) ->

  # Potfolio
  $("#sticker").sticky({topSpacing:10});

  $(".portfolio-menu a").click (event) ->
    scrollToElement = $($(this).attr("href"))
    $.scrollTo.window().queue([]).stop();
    $.scrollTo scrollToElement, "easeOut", {offset:-10}
    event.preventDefault()

  
  $('.thumbnails a .circle').tooltip({placement: 'bottom'})

  # Team Members
  fadeBio = (clicked, bio) ->
    $(".bio.current").fadeOut(->
      if bio isnt undefined
        console.log(bio)
        bio.fadeIn().addClass("current")
    ).removeClass("current")
    $('.thumbnails .current').removeClass('current')
    clicked.parent().addClass('current')
    

  $(".circle").on "click", ->
    clicked = $(this)
    teamMember = clicked.data("member")
    fadeBio(clicked, $(".bio-" + teamMember))
    return false

  $('.first').addClass('current')

  $(".team-bios").hide()
  # Workaround for the first team content opacity is getting set to 0
  $(".bio.first").fadeIn().addClass("current").attr("style","opacity:1")

  $('#bio-box').sticky({topSpacing:50});
