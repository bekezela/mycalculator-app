const typingDisplayBox=document.getElementById('typing-display-box');
const resultDisplayBox=document.getElementById('result-display-box');

function buttonOnClick(value) {
  if (value == 'clear'){
    typingDisplayBox.innerHTML='';
    resultDisplayBox.innerHTML='';
    return;
  }
if(value!=='='){
  typingDisplayBox.innerHTML+=value;
}else {

  const expresion=typingDisplayBox.innerHTML;
  const result=eval(expresion);
  resultDisplayBox.innerHTML=result;
}
}
