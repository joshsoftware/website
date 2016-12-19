var inner_content = "<div id='myCarousel' class='carousel slide'>\n<div class='carousel-inner carousel-inner1'>";
var random_index = 0;
function image_slide(isFlickr) {
  picasa_url = 'https://picasaweb.google.com/data/feed/api/user/josh.software.private.limited/albumid/5790176608367809425?alt=json&fields=entry(summary,media:group(media:content))&imgmax=288';
  flickr_url = 'http://api.flickr.com/services/feeds/photos_public.gne?id=27971085@N00&tags=joshsoftware&lang=en-us&format=json&jsoncallback=parseFlickrData';
  $.ajax({
    url: isFlickr == true ? flickr_url : picasa_url,
    dataType: 'jsonp',
    success: function(data){
      if(!isFlickr){
        parsePicasaData(data);
      }
    }
  })
}
function parsePicasaData(data){
  if(!data.feed.entry) return;
  size = data.feed.entry.length;
  for(var j=0; j< size; j++)
  {
    var image = data.feed.entry[j].media$group.media$content[0].url;
    var title =  data.feed.entry[j].summary.$t;
    if (j == 0){ //make the first image as active
      inner_content = inner_content + "<div class='item active img-responsive'>\n";
    }else{
      inner_content = inner_content + "<div class='item img-responsive'>\n";
    }
    inner_content = inner_content + "<div class = 'col-xs-3'> <img src='"+ image +"'>";
    inner_content = inner_content + "<p style='text-align:center'>"+ title +"</p>";
    inner_content = inner_content + "</div>\n</div>";
  }

  inner_content = inner_content + "</div>\n</div>";
  $('#fun').html(inner_content);
  
  $('#fun .carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
  });
  //commonEmbed(data, i);
}
function parseFlickrData(data){
  if(!data.items) return;
  size = data.items.length;
  random_index = Math.floor((Math.random()*size)+1);
  for(var i in data.items){
    var image = data.items[i].media.m;
    var title = data.items[i].title;
    commonEmbed(i, image, title);
  }
  autoPlay();
}
function commonEmbed(data, i){
}
function autoPlay(){
  inner_content = inner_content + "</div>\n</div>";
  $('#fun').html(inner_content);
  $('.carousel').carousel('cycle')
}
