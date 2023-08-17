

 function addListener(button)
 {
   button.addEventListener('click', DisplayInput);                                         
 }

const displayedNum= document.querySelector('.calculator__display');
const history = document.querySelector('.history');
const result = document.querySelector('.result');
const calculator = document.querySelector('.calculator') 
const buttons = calculator.querySelectorAll('.calculatorButtons')
buttons.forEach(addListener); 


function DisplayInput(e)
{
  if (e.target.matches('button'))
  {
      const button = e.target 
      const action = button.dataset.action  
      if (!(action) && displayedNum.textContent === '0')  // if its a number, and the screen is empty, replace the zero with the key input. 
      {
      let keyContent = button.textContent;
      displayedNum.textContent = keyContent;  
      }
      else if(!(action) && displayedNum.textContent!='0') // if its a number, and the text content doesn´t contain zero, append the key number. 
      {
      let keyContent = button.textContent;
      displayedNum.textContent = displayedNum.textContent + keyContent;  
      }
      else if(action=='add' && displayedNum.textContent!='0') // if its a + operator and there is a number on the screen
      {
       let saveNumber = displayedNum.textContent;
       history.textContent = saveNumber; 
       resetDisplay();
      }
      else if(action=='equal' && history.textContent!='0' && displayedNum.textContent!='0') //if user has pressed = and both fields aren't empty. 
      {
        var textAsNumber = parseInt(history.textContent);
        var textAsNumber2= parseInt(displayedNum.textContent);
        let output = textAsNumber+textAsNumber2;
        result.textContent = 'Sum is ' + output.toString();

      }
      else if(action=='clear')
      {
        location.reload();
      }

    }
 }

 function resetDisplay()
 {
  displayedNum.textContent='0';
 }

