// DOMs
let form = document.forms.notification;
let inputField = form.elements.email;
let submitBtn = form.elements.submitBtn;
let warningMessage = document.querySelector('.warning');

// Eventlisteners for inputField(email)
inputField.addEventListener('focus', (e) =>{
  inputField.value ='';
  inputField.style.border = "2px solid #3ee9e5"
});
inputField.addEventListener('focusout', ()=>{
  inputField.style.border = "none"
})
// ****************

// EventListener for the submit button
submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(validate(inputField.value)){
    warningMessage.style.display ="none";
    inputField.style.border = "none"
  }else{
    inputField.style.border = "2px solid #ff2965";
    warningMessage.style.display = "block";
  }
})
// *******************


function validate(email){
  const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
  if(reg.test(email)) return true;
  return false;
}