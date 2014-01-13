$ ->
  
  $('.person-info a').on 'click', (e) ->
    e.preventDefault()
    $('#'+$(this).data 'target').modal 'show'
