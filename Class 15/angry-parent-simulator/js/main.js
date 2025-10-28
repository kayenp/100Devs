const fNameInputElem = document.querySelector("#firstName");
const fMiddleInputElem = document.querySelector("#firstMiddle");
const lMiddleInputElem = document.querySelector("#lastMiddle");
const lNameElem = document.querySelector("#lastName");
const yellElem = document.querySelector("#yell");
const h2Elem = document.querySelector("#placeToYell");

yell.addEventListener("click", getValue);

function getValue() {
  h2Elem.innerText = `${fNameInputElem.value.toUpperCase()} ${fMiddleInputElem.value.toUpperCase()} ${lMiddleInputElem.value.toUpperCase()} ${lNameElem.value.toUpperCase()} ${yellElem.value.toUpperCase()} GET YOUR BUTT OVER HERE!`;

  setTimeout((() => alert("YOU'RE IN TROUBLE NOW!")), 3000);

}