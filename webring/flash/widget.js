// webstring by june @ webcatz.neocities.org
// mangled by jade from thepersonever.net!
console.log("running widget");
// settings
webring = {

  // list of sites in the ring
  sites: [
    "https://localhost/",
    "https://thepersonever.net/"
  ],

  // html inserted as your widget
  // PREV and NEXT get replaced with neighboring site urls
  // choose which widget to display by adding a data-widget="widgetname" attribute on the script
  widgets: {
    default: ``
  },

  // widget css
//  stylesheet: "https://your_site_here.neocities.org/folder/widget.css",

  // html inserted instead of your widget on sites that aren't in the ring
  error: "<div>This site isn't part of the webring yet.</div>",

};

// code
webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith(url));
if (webring.index === -1) document.currentScript.outerHTML = webring.error;
else {
//  let sheet = document.createElement("link");
//  sheet.rel = "stylesheet", sheet.href = webring.stylesheet;
//  document.head.appendChild(sheet);
	makeswf(window.location.hostname,(webring.sites.at(webring.index - 1)),(webring.sites[(webring.index + 1) % webring.sites.length]), (webring.sites[Math.floor(Math.random() * webring.sites.length)]));
	console.log("widget done");
}
delete webring;

// fully custom jarglet stuff! :D

	function makeswf(NAME, PREV, NEXT, RANDO){
		console.log("running logic for making flash");
		var att = { data:"https://thepersonever.net/webring/flash/widgets/"+NAME+".swf", width:"100%", height:"100%" };
		var par = { flashVars:"previous="+PREV+"&next="+NEXT+"&random="+RANDO };
		var id = "swfdiv";
		swfobject.createSWF(att, par, id);
		}