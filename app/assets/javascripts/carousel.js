var inner_content = "<div id='myCarousel' class='carousel slide'>\n<div class='carousel-inner'>";
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
  for(var i in data.feed.entry){
    var image = data.feed.entry[i].media$group.media$content[0].url;
    var title =  data.feed.entry[i].summary.$t;
    commonEmbed(i, image, title);
  }
  autoPlay();
}
function parseFlickrData(data){
  if(!data.items) return;
  for(var i in data.items){
    var image = data.items[i].media.m;
    var title = data.items[i].title;
    commonEmbed(i, image, title);
  }
  autoPlay();
}
function commonEmbed(index, image, title){
  if (index == 0){ //make the first image as active
    inner_content = inner_content + "<div class='item active'>\n";
  }else{
    inner_content = inner_content + "<div class='item'>\n";
  }
  inner_content = inner_content + "<img src='"+ image +"'>";
  inner_content = inner_content + "<p style='text-align:center'>"+ title +"</p>";
  inner_content = inner_content + "</div>";
}
function autoPlay(){
  inner_content = inner_content + "</div>\n</div>";
  $('#fun').html(inner_content);
  $('.carousel').carousel('cycle')
}
