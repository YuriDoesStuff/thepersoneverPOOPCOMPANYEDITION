// edited version of pikrink widget - https://nickolox.com/pikring/pikring-widget.js

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

function randomSite() {
  otherSites = sites.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
<div class="PikRing">
  <p>✿ This site isn't part of the ${ringName} yet. ✿<br>Please email <a href="https://nickolox.com/" target="_top">Nickolox</a> if you'd like to be added!</p>
  <a href='${indexPage}' target="_top"><img src="https://nickolox.com/pikring/asset/notfound.png" height="150" title="Click here to go to the Pik-Ring index!" alt="Index Link Artwork"></a>
</div>
  `);
}
else {
  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  indexText = ""
  //if you've chosen to include an index, this builds the link to that
  if (useIndex) {
    indexText = `<a href='${indexPage}' target="_top">Index</a>`;
  }

  randomText = ""
  //if you've chosen to include a random button, this builds the link that does that
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomSite()' target="_top">Random</a> `;
  }

  //this is the code that displays the widget - EDIT THIS if you want to change the structure
  tag.insertAdjacentHTML('afterbegin', `
<div class="PikRing">
  <p>✿ Member of the <i>${ringName}</i> ✿</p>
  <a href='${indexPage}' target="_top"><img src="/pikring/asset/pikmin.png" class="PikRingImage" title="Click here to go to the Pik-Ring index!" alt="Index Link Artwork"></a>
  <p><a href="${sites[previousIndex]}" target="_top">← Prev</a> ✿ ${randomText} ✿ <a href="${sites[nextIndex]}" target="_top">Next →</a></p>
</div>
  `);

}
