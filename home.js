var txtInput = document.querySelector('#txtInput');
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', ()=> {
    var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
});

function PopulateVoices(){
    voices = synth.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice)=>{
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
}
var speak = document.getElementById('speak');
var textarea = document.getElementById('textarea');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
speak.addEventListener('click', function () {
    recognition.start();
    textarea.innerHTML = '...speaking';
})
recognition.onresult = function (e) {
    var transcript = e.results[0][0].transcript;
    textarea.innerHTML = transcript;
}

const audioContext = new AudioContext();

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const source = audioContext.createMediaStreamSource(stream);

    const scriptNode = audioContext.createScriptProcessor(4096, 1, 1);
    
    source.connect(scriptNode);
    
    scriptNode.connect(audioContext.destination);
    
    scriptNode.onaudioprocess = function(event) {
      const inputBuffer = event.inputBuffer.getChannelData(0);
      let sum = 0;
      for (let i = 0; i < inputBuffer.length; i++) {
        sum += inputBuffer[i] * inputBuffer[i];
      }
      const rms = Math.sqrt(sum / inputBuffer.length);
      const db = 20 * Math.log10(rms);
      
      // Update the decibel level meter
      const meter = document.getElementById('meter');
      const level = document.getElementById('level');
      level.style.width = Math.max(0, Math.min(100, db + 100)) + '%';
    };
  })
  .catch(err => console.error('Error accessing microphone:', err));
