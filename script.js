const playButton = document.getElementById('play-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter
const utterance = new SpeechSynthesisUtterance()

playButton.addEventListener('click', function() {
  playText(textInput.value)
})

pauseButton.addEventListener('click', function(){
  if (speechSynthesis.speaking) speechSynthesis.pause()
})

stopButton.addEventListener('click', function(){
  speechSynthesis.resume()
  speechSynthesis.cancel()
})


utterance.addEventListener('end', () => {
  textInput.disabled = false
})


function playText(text) {

  //Exit the function if any of the condtions are true
  if (speechSynthesis.paused) return speechSynthesis.resume() 
  if (speechSynthesis.speaking) return

  utterance.text = text
  utterance.rate = speedInput.value
  textInput.disabled = true
  speechSynthesis.speak(utterance)
}
