$ ->
  
  $('.person-info a, .person img').on 'click', (e) ->
    e.preventDefault()
    $('#'+$(this).data 'target').modal 'show'

  $('.icon-arrow-up').tooltip()
