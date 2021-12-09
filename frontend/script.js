const display = document.querySelector('#displayHamster')
const fetchbutton = document.querySelector('#getHamster')

fetchbutton.addEventListener('click', async event => {

try {
  const response = await fetch('/hamsters/random')
  const json = await  response.json()

  let text = JSON.stringify(json)
  display.innerHTML = text
}
catch  {
console.log("Error");
}
})
