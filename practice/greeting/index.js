// Render the sentence in the greetingEl paragraph using a for loop and .textContent

let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++ ) {
    greetingEl.textContent += sentence[i] + " "
}