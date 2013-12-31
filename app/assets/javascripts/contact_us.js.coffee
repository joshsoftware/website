$(document).ready ->
  $('#contact_submit').on 'click',  ->
    if $('#email').val() == '' 
      alert('Please enter your email')
      $('#email').focus()
      return false
    if $('#email').val().match('[\w\.%\+\_\-]+@([A-Za-z0-9\-]+\.)+') == ''
      alert('Please enter a valid email')
      $('#email').focus()
      return false
