$ ->
  $('.person-info a, .person img').on 'click', (e) ->
    e.preventDefault()
    $('#'+$(this).data 'target').modal 'show'

  $('.icon-arrow-up').tooltip()

  RevSlide.initRevolutionSlider()

$(window).load ->
  $("[data-zlname = reverse-effect]").mateHover
    position: "y-reverse"
    overlayStyle: "rolling"
    overlayBg: "#fff"
    overlayOpacity: 0.7
    overlayEasing: "easeOutCirc"
    rollingPosition: "top"
    popupEasing: "easeOutBack"
    popup2Easing: "easeOutBack"

  $(".flexslider").flexslider
    animation: "slide" #slide or swing
    slideshow: false #automatic slideshow
    reverse: false
    start: (slider) ->
      $("body").removeClass "loading"
      return

  $('#fun').carousel interval: 3000

  image_slide()

