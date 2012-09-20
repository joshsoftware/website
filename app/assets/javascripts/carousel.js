function image_slide() {
  $.ajax({
    url: 'https://picasaweb.google.com/data/feed/api/user/josh.software.private.limited/albumid/5790176608367809425?alt=json&fields=entry(gphoto:id,title,media:group(media:content))&imgmax=288',
    dataType: 'jsonp',
    success: function(data){
      var inner_content="<div id='myCarousel' class='carousel slide' >\n<div class='carousel-inner'>";
      if(!data.feed.entry) return;
      for(var i in data.feed.entry){
        var e     = data.feed.entry[i].media$group.media$content[0].url;
        if (i == 0){
          inner_content = inner_content + "<div class='item active'>\n"
        }else{
          inner_content = inner_content + "<div class='item'>\n"
        }
        inner_content = inner_content + "<img src='"+ e +"'></div>"
      }
      inner_content = inner_content + "</div>\n</div>";
      $('#fun').html(inner_content);
      $('.carousel').carousel('cycle')
    }
  })
}
