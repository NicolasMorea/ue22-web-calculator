//Nicolas MOREAU 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const aff = calculator.querySelector('.calculator__display')

staged = ""
current = "0"
operator = ""
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    if (!action) {
        if (current == "0" || current == "" || current == "error"){
            current = key.textContent
        }
        else {
            current = current.toString() + key.textContent
        }
        console.log(current)
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
        if(operator == "" && current != "" && current != "error"){
            staged = current
            current = ""
            if(action == 'add'){
                operator = "+";
            }
            else if(action == 'subtract'){
                operator = "-";
            }
            else if(action == 'multiply'){
                operator = "&times";
            }
            else if(action == 'divide'){
                operator = "÷";
            }
        }
      }
      if (action === 'decimal') {
        if(!current.includes(".")){
            current = current.toString() + ".";
        }
        console.log('decimal key!')
      }
      
      if (action === 'clear') {
        current = "0"
        staged = ""
        operator = ""
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
        if(operator != ""){
            if(current != ""){
                if (operator == "+"){
                    current = parseFloat(staged) + parseFloat(current);
                } 
                else if (operator == "-"){
                    current = parseFloat(staged) - parseFloat(current);
                } 
                else if (operator == "&times"){
                    current = parseFloat(staged) * parseFloat(current);
                } 
                else if (operator == "÷"){
                    if(current == "0"){
                        current = "error"
                    }
                    else{
                        current = parseFloat(staged) / parseFloat(current);
                    }
                } 
                current = current.toString();
                operator = ""
                staged = ""
            }
        }
      }
    affiche(staged + operator + current)
  }
})

function affiche(content){
 document.getElementById("affichage").innerHTML = content;
}
