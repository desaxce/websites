(function(){
    var startPic = getStartPos(),
        options = [],
	startOK = false;
	function getStartPos(){
		var hash = document.location.hash;
		hash = hash.substring(1);
		if(/img\d{1}/g.test(hash)){
			return /img(\d)/g.exec(hash)[1];
			//return hash.substring(3,4);
		}
	}
	function picRolling(){	
		var getUl=document.getElementById('ss_sifb_pic-cont'),getLi=getUl.getElementsByTagName('li'),getImg=getUl.getElementsByTagName('img'),	
		getRight=document.getElementById('ss_sifb_right-btn'),getLeft=document.getElementById('ss_sifb_left-btn'),	
		timer=null, 
		timer_one = null, 
		shifting = 10, 	
		speed = 5, 
		timer_out = null, 	
		ifMouseOver = false, 
		imgWidth = 160, 	
		temp = 0,	
		newUlNode = document.createElement('ul'); 
		getUl.appendChild(newUlNode);	
		newUlNode.innerHTML = getUl.getElementsByTagName('ul')[0].innerHTML;	
		getUl.style.width = (getLi[0].offsetWidth)*getLi.length+'px'; 	
		var ulWidth = getUl.offsetWidth;	
		if(startPic){
			var leftPicPos = -imgWidth*(startPic-1);
			getUl.style.left = leftPicPos+'px';
			temp = leftPicPos;
			setTimeout(function(){startOK = true},15000);
		}else{
			startOK = true;
		}
		//timer_out = window.setTimeout(function(){timer=setInterval(roll,speed)},3000);	
		getRight.onclick=function(){ 
			if(temp % imgWidth == 0){ 	
				theShifting = 0 - shifting;	
				clearInterval(timer);	
				clearTimeout(timer_out);	
				timer_one = setInterval(rollOneTime,speed);	
			}		
			return false;	
		}	
		getRight.onmouseover = function(){	
			getRight.getElementsByTagName("a")[0].className = "now-btn";	
			getLeft.getElementsByTagName("a")[0].className = "now-btn";	
		}	
		getLeft.onmouseover = function(){	
			getRight.getElementsByTagName("a")[0].className = "now-btn";	
			getLeft.getElementsByTagName("a")[0].className = "now-btn";	
		}	
		getRight.onmouseout = function(){	
			getRight.getElementsByTagName("a")[0].className = "";	
			getLeft.getElementsByTagName("a")[0].className = "";	
		}	
		getLeft.onmouseout = function(){	
			getRight.getElementsByTagName("a")[0].className = "";	
			getLeft.getElementsByTagName("a")[0].className = "";	
		}	
		getLeft.onclick=function(){ 
			if(temp % imgWidth == 0){ 
				theShifting = shifting;	
				clearInterval(timer);	
				clearTimeout(timer_out);	
				timer_one = setInterval(rollOneTime,speed);	
			}		
			return false;	
		}
		function rollOneTime(){  	
			clearInterval(timer);	
			clearTimeout(timer_out);	
			getUl.style.left = temp + theShifting + 'px';  
			temp = temp + theShifting; 
			if(temp % imgWidth == 0){ 	
				clearInterval(timer_one);	
				clearInterval(timer);	
                                var tempSort = Math.abs(temp/imgWidth);
                                if (tempSort == options.length){
                                    tempSort = 0;
                                }
                                getImp(options[tempSort]["imp"]);
				//timer_out = window.setTimeout(function(){timer=setInterval(roll,speed)},3000); 
			}
			if(temp < -ulWidth/2){ 
				getUl.style.left=0;	
				temp = 0;	
			}	
			if(temp > 0){ 
				getUl.style.left = -ulWidth/2+'px';	
				temp = -ulWidth/2;	
			}		
		}	
		function roll(){  	
			if(!startOK){return};
			clearInterval(timer_one);	
			clearTimeout(timer_out);	
			theShifting = 0 - shifting;  
			getUl.style.left = temp + theShifting+'px'; 
			temp = temp + theShifting;  	
			if(temp % imgWidth == 0){ 
				clearInterval(timer);	
				if(!ifMouseOver){	
					//timer_out = window.setTimeout(function(){timer=setInterval(roll,speed)},3000); 
				}	
			}	
			if(temp<-ulWidth/2){  
				getUl.style.left=0;	
				temp = 0;	
			}	
			if(temp>0){ 
				getUl.style.left=-ulWidth/2+'px';	
				temp = -ulWidth/2;	
			}	
		}									
		for(var i=0; i<getLi.length; i++){   
			getLi[i].onmouseover=function(){ 	
				if(getUl.offsetLeft % imgWidth == 0){ 
					clearInterval(timer);	
					clearTimeout(timer_out);	
					getRight.getElementsByTagName("a")[0].className = "now-btn";	
					getLeft.getElementsByTagName("a")[0].className = "now-btn";	
				}	
			}	
			getLi[i].onmouseout=function(){
				if(getUl.offsetLeft % imgWidth == 0){	
					clearInterval(timer);	
					clearTimeout(timer_out);	
					getRight.getElementsByTagName("a")[0].className = "";	
					getLeft.getElementsByTagName("a")[0].className = "";	
					//timer_out = window.setTimeout(function(){timer=setInterval(roll,speed)},3000);	
				}	
			}	
		}	
	}	

    function initSohuIndexFirstButton (opt){
        var type = Object.prototype.toString.call(opt);
        if(type !== "[object Array]"){
            return false;
        };
        var TurnAD118=new Cookie(document,"TurnAD118",24);
        TurnAD118.load();
        TurnAD118.visit=(TurnAD118.visit==null)?parseInt(Math.random()*opt.length+1):TurnAD118.visit;
        if(TurnAD118.visit!=0){var intTurnAD118=TurnAD118.visit;}
        TurnAD118.visit++;
        TurnAD118.visit=(TurnAD118.visit>opt.length)?1:TurnAD118.visit;
        TurnAD118.store();

        // options = opt = opt.sort(randomSort);
        options = opt.splice(intTurnAD118-1, opt.length-intTurnAD118+1);
        options = opt = options.concat(opt);
        var contdiv = document.getElementById("ss_sifb_pic-cont");
        contdiv.appendChild(document.createElement("ul"));
        var ul = contdiv.getElementsByTagName("ul")[0];
        for(var i=0, len = opt.length;i<len;i++){
            var node = document.createElement("li");
            node.style.cssText="display: inline-block; float: left; position: relative;";
            var source = opt[i]["img"];
            var link = opt[i]["link"];
            var textlink = opt[i]["textlink"];
            var text = opt[i]["text"];
            if(source.substr(source.length-4,4) == ".swf"){
                var flash = new sohuFlash(source, 'ss_sifb_flash'+ new Date().getTime(), 160, 140, '7');
                flash.addParam("quality","high");
                flash.addParam("wmode","opaque");
                flash.addParam("allowScriptAccess","always");
                flash.addVariable("clickthru",escape(link));
                var flashover = "<div style=\"position:absolute;width:160px;height:140px;z-index:2;top:0px;left:0px;\"><a href=\""+link+"\" target=\"_blank\"><img src=\"http://images.sohu.com/bill/default/1x1.gif\" border=\"0\" width=\"160\" height=\"140\"></a></div>";
                //node.innerHTML = "<div style=\"z-index:1;width:160px;height:140px;top:0px;left:0px;\">"+flash.getFlashHTML()+"</div>"+flashover;
                node.innerHTML = "<div style=\"z-index:1;width:160px;height:140px;top:0px;left:0px;\">"+flash.getFlashHTML()+"<span style=\"position: absolute; width: 160px; left: 0; bottom: 0; _bottom: -1px; height: 21px; padding: 4px 0 0; line-height: 18px; line-height: 20px\9; font-weight: bold; color: #fff;text-align: center;\"><i style=\"position: absolute; left: 0; top: 0; height: 25px; width: 160px; background: #000; filter: alpha(opacity=60); opacity: 0.60;\"></i><a style=\"position: relative; z-index: 3; color: #FFF;\" href=\""+textlink+"\" target=\"_blank\" >"+text+"</a></span></div>";
            }else{
                node.innerHTML = "<a href=\""+link+"\" target=\"_blank\"><img width=\"160px\" height=\"140px\" src=\""+source+"\" /></a><span style=\"position: absolute; width: 160px; left: 0; bottom: 0; _bottom: -1px; height: 21px; padding: 4px 0 0; line-height: 18px; line-height: 20px\9; font-weight: bold; color: #fff;text-align: center;\"><i style=\"position: absolute; left: 0; top: 0; height: 25px; width: 160px; background: #000; filter: alpha(opacity=60); opacity: 0.60;\"></i><a style=\"position: relative; z-index: 3; color: #FFF;\" href=\""+textlink+"\" target=\"_blank\" >"+text+"</a></span>";
            }
            ul.appendChild(node);
        }
        getImp(options[0]["imp"]);
        picRolling();
    }
    function randomSort(a, b){
        return Math.random() - 0.5;
    }
    function getImp(imp){
        if (typeof imp!=="undefined" && imp != "") {
            new Image().src = imp + '?t=' + new Date().getTime();
        }
    }
    window.initSohuIndexFirstButton = initSohuIndexFirstButton;
})();

