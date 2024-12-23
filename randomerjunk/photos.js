function hide(){
	document.getElementById('bigimg').innerHTML = ''; 
	document.getElementById('indiv').className = 'medimg';
   
}

function newswitch(url, title){
	document.getElementById('indiv').className = 'smallimg';
	switch(title){
		case(undefined):
			document.getElementById('bigimg').innerHTML = '<img src=https://i.imgur.com/'+url+'.jpg   onclick=hide()>';  
			break;
		default: 
			document.getElementById('bigimg').innerHTML = '<h1>'+title+'</h1><img src=https://i.imgur.com/'+url+'.jpg   onclick=hide()>';  
			break;
	}
}