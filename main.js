

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

var images = [
  'http://wallpapers-and-backgrounds.net/wp-content/uploads/2015/10/glitter-hd-background_1_640x360.jpg',
  'https://www.extremetech.com/wp-content/uploads/2016/08/curiosity-mars-rover-self-portrait-martian-sand-dunes-pia20316-br2-640x480.jpg',
  'https://img.etimg.com/thumb/msid-57987096,width-640,resizemode-4,imglength-7263/more-insights-on-evolution-of-the-universe.jpg',
  'https://i.ytimg.com/vi/TeYc-16AX24/sddefault.jpg',
  'http://www2.rtcg.me/upload/thumbnail/2013/09/27/125321/marsmethane0919.jpg'
]
for (var i = 0; i < images.length; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', images[i]);
  thumbBar.appendChild(newImage);
  newImage.onclick = function() {
     var imgSrc = this.getAttribute('src')
     displayedImage.setAttribute('src', imgSrc)
  }
}

btn.addEventListener('click', function(e) {
  cla = btn.getAttribute('class')
  if (cla == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
  } else if (cla == 'light') {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  }
});