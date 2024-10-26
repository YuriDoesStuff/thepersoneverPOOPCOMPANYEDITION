 var num = Math.floor(Math.random() * 12);
 var num2 = Math.floor(Math.random() * 3);
 
 
  if (num == 0) {text = '<span>the start button works btw (404)</span>'}
  if (num == 1) {text = '<span>what did u spam into the search bar??? (404)</span>'}
  if (num == 2) {text = '<span>looks like this user has no content :( [404]</span>'}
  if (num == 3) {text = '<span>404 errors! just in a week! oh wow... (this is a 404 error)</span>'}
  if (num == 4) {text = '<span>were you looking for secrets? (404)</span>'}
  if (num == 5) {text = '<span>IM... GLAD (404)</span>'}
  if (num == 6) {text = '<span>whoopsie doopsie ive gone loopy!! (404 loops...)</span>'}
  if (num == 7) {text = '<span>(some) People call me the 4044444 errorrrrrrr (whicka whicka)</span>'}
  if (num == 8) {text = '<a href=/rabbit/anti.html><h2><span>did you know karkat hates breadbugs? (404)</h2></span></a>'}
  if (num == 9) {text = '<span>im like jade if she was flat and gay. 404 error</span>'}
  if (num == 10) {text = '<span>hey guys should i kill msyelf (404)</span>'}
  if (num == 11) {text = '<span>i hate javascript i love javascript i hate javascript i (404)</span>'}
  if (num == 12) {text = '<a href=/secrets/JADEHEART><span>License to Jade\'s heart</span></a>'}
  
  if (num2 == 0) {img = '/images/rj404.png'}
  if (num2 == 1) {img = '/images/jfp404.png'}
  if (num2 == 2) {img = '/images/xdx3xp404.png'}
  if (num2 == 3) {img = '/images/normal404.png'}
  
  function standard(){
document.getElementById('rtext').innerHTML = text;
document.getElementById('ima').src = img;
}

function numbers(){
document.getElementById('ntext').innerHTML = num;
}
