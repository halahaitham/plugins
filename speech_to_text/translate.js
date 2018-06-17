
    var text=document.querySelector('#text');
	var speak= document.querySelector('#speak');

	function speaknow(){
		var speech = new SpeechSynthesisUtterance();
		speech.rate = .7;
		speech.pitch =1;
		speech.volume=1;
		speech.voice=speechSynthesis.getVoices()[0];
		speech.text=text.value;

		speechSynthesis.speak(speech);
	}


	speak.onclick = function(e){
		e.preventDefault();
		speaknow();
	};
