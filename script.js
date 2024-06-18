function onClickSubmitButton(){
  let inputvalue = document.getElementById('inputText').value;
  if (inputvalue>0){
    alert('Hey el numero es mayor que cero')
  }
  if (inputvalue<0){
    alert('hey el numero es menor que cero')
  }
  if (inputvalue==0){
    alert('Intente otra vez')
  }
}