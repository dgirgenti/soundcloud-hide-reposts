(function() {
	var ps = document.querySelectorAll(".soundList__item"); 
	for (var i=0; i<ps.length; i++){ 
		var p = ps[i]; 
		if (p.innerHTML.indexOf('reposted')>-1) 
			p.remove(); 
	}
})();
