const parts = 6
const lvls = 5

for (let part = 0; part < parts; part++) {
  const partEl = document.createElement("div")
  partEl.classList.add("pie__part")
  const angle = 2 * Math.PI / parts
  console.log(angle)
  partEl.style.clipPath = `polygon(50% 0%, ${(1+Math.sin(angle))*50}% 0%, ${(1+Math.sin(angle))*50}% ${(1-Math.cos(angle))*50}%, 50% 50%)`
  partEl.style.rotate = `${360*part/parts}deg`

  for (let lvl = lvls; lvl > 0; lvl--) {
    const lvlInputEl = document.createElement("input")
    const lvlLabelEl = document.createElement("label")

    lvlInputEl.classList.add("pie__input")
    lvlInputEl.setAttribute("type", "checkbox")
    lvlInputEl.setAttribute("id", `part-${part}-${lvl}`)
    lvlInputEl.addEventListener("change", uncheckInputs)

    lvlLabelEl.setAttribute("for", `part-${part}-${lvl}`)
    lvlLabelEl.classList.add("pie__label")
    lvlLabelEl.classList.add(`pie__label--lvl-${lvl}`)
    lvlLabelEl.style.width = `${100*lvl/lvls}%`
    lvlLabelEl.style.height = `${100*lvl/lvls}%`
    lvlLabelEl.style.backgroundColor = `hsl(223, 100%, ${50*(lvls - lvl)/lvls+40}%)`

    partEl.appendChild(lvlInputEl)
    partEl.appendChild(lvlLabelEl)
  }
  document.body.querySelector(".pie").appendChild(partEl)
}

/**
 * @this HTMLInputElement
 */

function uncheckInputs() {
  const inputs = this.parentElement.querySelectorAll("input")
  for (const input of inputs) {
    input.checked = false
  }
  this.checked = true
}
