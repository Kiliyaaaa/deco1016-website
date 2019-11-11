
	
			var lb = document.getElementById("lunbo")
			var num = 1;

			//auto-scrolling image
			setInterval(function() {
				num++;
				if(num == 5) {
					num = 1;
				}
				lb.src = "img/" + num + ".jpg"
			}, 3000)


// hamburger bar in mobile view
var menu = document.getElementById("nav");
			var top1 = document.getElementById("top1");
			var a = document.getElementById("a");
			var aa = document.getElementById("aa");
			menu.onclick=function(){
			a.style.color='black'
			aa.style.color='black'
				top1.offsetHeight==172?top1.style.height="72px":top1.style.height="172px";
				
			}
			var btn = document.getElementById("nav");
	 btn.onclick = function(){
            var x = document.getElementById("top");
           x.offsetHeight==172?x.style.height="72px":x.style.height="172px";
		  
        }