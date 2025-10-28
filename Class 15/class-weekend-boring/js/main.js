//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  const newFrag = document.createDocumentFragment();
  newFrag.textContent = `${day}`;
  const h2 = document.querySelector("h2");
  h2.appendChild(newFrag);
  const dayPrefix = day.toLowerCase().slice(0, 1);

  (dayPrefix === "t") ? console.log("YOU HAVE CLASS") :
  (dayPrefix === "s") ? console.log("It's the WEEKEND!") :
  (dayPrefix === "w") ? console.log("It's the day of the hump") : console.log("BORING");

}
