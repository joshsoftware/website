$(window).load ->
  $.ajax
    url: intranet_url + '/api/v1/team',
    success: (data) ->
      template = $('#members').html()
      x = Mustache.render(template, team_members: data)
      $('#members_data').html x
      return
    error: (error) ->
      $('#loading_team').addClass('hide')
