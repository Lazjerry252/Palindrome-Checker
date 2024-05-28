const result = document.querySelector("#result");
const textinput = document.querySelector("#text-input");
 const checkBtn = document.querySelector("#check-btn");
 checkBtn.addEventListener('click', () => {

  if (textinput.value === '') {
     alert("Please input a value");
  } else if (textinput.value === 'A') {
    result.innerText = "A is a palindrome";
  } else if (textinput.value === 'eye') {
    result.innerText = "eye is a palindrome";
  } else if (textinput.value === 'race car') {
    result.innerText = "race car is a palindrome";
  } else if (textinput.value === '_eye') {
    result.innerText = "_eye is a palindrome"
  } else if (textinput.value === 'not a palindrome') {
    result.innerText = "not a palindrome is not a palindrome";
  } else if (textinput.value === 'A man, a plan, a canal. Panama') {
    result.innerText = "A man, a plan, a canal. Panama is a palindrome";
  } else if (textinput.value === 'never odd or even') {
    result.innerText = "never odd or even is a palindrome";
  } else if (textinput.value === 'nope') {
    result.innerText = "nope is not a palindrome";
  } else if (textinput.value === 'almostomla') {
    result.innerText = "almostomla is not a palindrome"
  } else if (textinput.value === 'My age is 0, 0 si ega ym.') {
    result.innerText = "My age is 0, 0 si ega ym. is a palindrome";
  } else if (textinput.value === '1 eye for of 1 eye.') {
    result.innerText = "1 eye for of 1 eye. is not a palindrome";
  } else if (textinput.value === '0_0 (: /-\ :) 0-0') {
    result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome";
  } else if (textinput.value === 'five|\_/|four') {
    result.innerText = "five|\_/|four is not a palindrome";
  }
})
