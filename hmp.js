
var wavesuu = 10;
var delaytime = 3;

function wave() {

	var container = document.getElementById("umi");

	var wavev;

	
	for(var i = 0; i < wavesuu; i++) {
	
		wavev = '<div class="wav" id="wave' + i + '"></div>';

		container.insertAdjacentHTML('beforeend', wavev);
		
	}
	
	var wavedv;
	
	for(var i = 0; i < wavesuu; i++) {
		wavedv = document.getElementById("wave" + i);

		var random = Math.random() * delaytime;
		wavedv.style.animationDelay = random + "s";

		wavev = '<div class="wav2" id="wave2_' + i + '"></div>';
		wavedv.insertAdjacentHTML('beforeend', wavev); // –A‚ÌŒ³‘«‚µ‚Ü‚·
		var wavedv2 = document.getElementById("wave2_" + i);
		wavedv2.style.animationDelay = wavedv.style.animationDelay;
		
		wave2(wavedv);
		
		wavedv.addEventListener("animationiteration", function(evt) {
			
			wave2(this);

		});
				
	}

}


function wave2(wavedv) {

	var random = Math.floor( Math.random() * 81); // 0~80	
	wavedv.style.left = random + "%";
	
	random = Math.floor( Math.random() * 81); // 0~80	
	wavedv.style.top = random + "%";

}


