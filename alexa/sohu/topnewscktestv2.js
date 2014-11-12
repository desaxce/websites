	(function () {
		function gotodoc(i,j,cname,ahref) {
			//判定是否为doc页面是则监测
			var patrn = /.shtml|.html$/;
			if (patrn.exec(ahref)) {
				if (ahref.indexOf('s2014') == -1 && ahref.indexOf('tv.sohu.com') == -1 ) {
					var exposure = new Image();
					exposure.src = 'http://imp.optaim.com/201405/aa2df593a9ab614782aa2f10a82a7e26.php?a='+i+j+'&t='+new Date().getTime();
				}
			}
		}
		function gotoli(i,cname,ahref) {
			//li每一行的点击
			var exposure = new Image();
			exposure.src = 'http://imp.optaim.com/201405/6fd4eba2a671083d91a7d7a12046002c.php?a='+i+'&t='+new Date().getTime();
		}		
		function Topnews_addEvent(obj, eventType, func) {
			if (obj.attachEvent) {
				obj.attachEvent("on" + eventType, func);
			} else {
				obj.addEventListener(eventType, func, false);
			}
		};
		function Topnews_attachURL2AD(obj, cname, sid) {
			var links;
			try {
				links = obj.getElementsByTagName("li");
			} catch (e) {
				links = [];
			}
			for (var i = 0, len = links.length; i < len; i++) {
				var tmpi = i+1;
				Topnews_addEvent(links[i], "mousedown", (function(tmpi,cname,ahref){
					return function (){
					gotoli(tmpi,cname,ahref);
				}
				})(tmpi,cname,ahref));
				var alink = links[i].getElementsByTagName("a");
				for (var j = 0, len2 = alink.length; j < len2; j++) {
					var ahref = alink[j].href;
					var tmpj = j+1;
					Topnews_addEvent(alink[j], "mousedown", (function(tmpi,tmpj,cname,ahref){
						return function (){
							gotodoc(tmpi,tmpj,cname,ahref);
						}
					})(tmpi,tmpj,cname,ahref));
				}
				
				
			}
		};

		var obj = document.getElementById('top_news');		
		var blocks = obj.getElementsByTagName("ul");
		var newsblock = blocks[0];
		Topnews_attachURL2AD(newsblock, 'sohu-top', 1);
	})()