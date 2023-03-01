//Nicolas MOREAU 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const aff = calculator.querySelector('.calculator__display')

staged = 0
current = 0

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    if (!action) {
        current = parseFloat( current.toString() + key.textContent)
        console.log(current)
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }
      if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
      }
  }
})

function affiche(content){
 screen = document.getElementById("affichage");
 screen.innerHTML = content;
}
