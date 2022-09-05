const parts = 6
const lvls = 5
const angle = 2 * Math.PI / parts
const contEl = document.body.querySelector(".pie")

for (let part = 0; part < parts; part++) {
  const partEl = document.createElement("div")

  partEl.classList.add("pie__part")
  partEl.style.clipPath = pieClipPath(angle, part)

  for (let lvl = lvls; lvl > 0; lvl--) {
    createPieLvl(partEl, part, lvl)
  }

  const sliceDividerEl = document.createElement("div")
  sliceDividerEl.classList.add("pie__slice-divider")
  sliceDividerEl.style.rotate = `${part * angle}rad`

  contEl.appendChild(partEl)
  contEl.appendChild(sliceDividerEl)
}

for (let lvl = 1; lvl < lvls; lvl++) {
  const lvlDividerEl = document.createElement("div")
  lvlDividerEl.classList.add("pie__lvl-divider")
  lvlDividerEl.style.width = `${100 * lvl / lvls}%`
  lvlDividerEl.style.height = `${100 * lvl / lvls}%`

  contEl.appendChild(lvlDividerEl)
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




/**
 *
 * @param {Number} angle Angle of a pie part in radians
 * @param {Number} part Index of the pie slice
 */
function pieClipPath(angle, part) {
  const pointA = {
    x: (1 + Math.sin(angle * part)) * 50,
    y: (1 - Math.cos(angle * part)) * 50
  }

  const pointB = {
    x: (1 + Math.cos(angle * (part + .5) - Math.PI / 2) / Math.cos(angle / 2)) * 50,
    y: (1 + Math.sin(angle * (part + .5) - Math.PI / 2) / Math.cos(angle / 2)) * 50,
  }

  const pointC = {
    x: (1 + 1 * Math.cos(angle * (part + 1) - Math.PI / 2)) * 50,
    y: (1 + 1 * Math.sin(angle * (part + 1) - Math.PI / 2)) * 50,
  }

  return `polygon(${pointA.x}% ${pointA.y}%, ${pointB.x}% ${pointB.y}%, ${pointC.x}% ${pointC.y}%, 50% 50%)`
}

/**
 *
 * @param {HTMLDivElement} partEl
 * @param {Number} lvl
 */
function createPieLvl(partEl, part, lvl) {

  const lvlInputEl = document.createElement("input")
  const lvlLabelEl = document.createElement("label")

  lvlInputEl.classList.add("pie__input")
  lvlInputEl.setAttribute("type", "checkbox")
  lvlInputEl.setAttribute("id", `part-${part}-${lvl}`)
  lvlInputEl.addEventListener("change", uncheckInputs)

  lvlLabelEl.setAttribute("for", `part-${part}-${lvl}`)
  lvlLabelEl.classList.add("pie__label")
  lvlLabelEl.classList.add(`pie__label--lvl-${lvl}`)
  lvlLabelEl.style.width = `${100 * lvl / lvls}%`
  lvlLabelEl.style.height = `${100 * lvl / lvls}%`
  lvlLabelEl.style.backgroundColor = `hsl(223, 100%, ${50 * (lvls - lvl) / lvls + 40}%)`

  partEl.appendChild(lvlInputEl)
  partEl.appendChild(lvlLabelEl)
}
