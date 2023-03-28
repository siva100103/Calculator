function calcu(){
    form1.answer.value=eval(form1.answer.value);
}
function sub(){
    var a=form1.answer.value.length-1;
   form1.answer.value=form1.answer.value.substr(0,a);
}