window.onload = function() {

			var head = document.head || document.getElementsByTagName('head')[0],
			    style = document.createElement('style');
				style.type = 'text/css';
			style.appendChild(document.createTextNode("@media screen and (max-width: 768px) {"))
		    var tables = document.getElementsByTagName("table");

			for (i=0; i < tables.length; i++) {
				var tableid = tables[i].getAttribute('id');
				var tableheading = tables[i].getElementsByTagName("th");
				for (y=0; y < tableheading.length; y++){
					var css ='#' + tableid + ' ' + 'td:nth-of-type(' + (y + 1) + '):before { content: "' + tableheading[y].textContent + '"; }';
					style.appendChild(document.createTextNode(css));
				}
			}

			style.appendChild(document.createTextNode("}"));
			head.appendChild(style);
}


document.getElementById("menu-toggle").onclick = function() {menuToggle()};


function menuToggle(){
	var mainNav = document.getElementById("main-nav");
	
	if (mainNav.className != "toggled"){
	mainNav.className = "toggled";}
	else {
	mainNav.className = "untoggled";
	}
}