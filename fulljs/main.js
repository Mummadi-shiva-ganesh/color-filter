// console.log("Jai sri ram")
       // Function to trigger confetti
       function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            shapes: ['circle', 'square', 'line','diamond'] // Different shapes for the confetti
        });
    }
//for red color
function redButton(){
  document.body.style.backgroundColor = 'red'
  triggerConfetti()
  document.body.style.backgroundImage = 'none'
}
//for green color
function greenButton(){
  document.body.style.backgroundColor = 'green'
  triggerConfetti()
  document.body.style.backgroundImage = 'none'
}
//for blue
function blueButton(){
  document.body.style.backgroundColor = 'blue'
  triggerConfetti()
  document.body.style.backgroundImage = 'none'
}
//random color
function randomButton(){
  function rnd_color(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
  return `rgb(${red},${green},${blue}`
  }

  
  document.body.style.backgroundColor = rnd_color();
  triggerConfetti()
  document.body.style.backgroundImage = 'none'

}