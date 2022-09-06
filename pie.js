import pieClipPath from "./pieClipPath.mjs"
import createSliceDivisions from "./createSliceDivisions.mjs"

const parts = 6
const lvls = 5
const angle = 2 * Math.PI / parts
const contEl = document.body.querySelector(".pie")

for (let part = 0; part < parts; part++) {
  // Create pie parts
  const partEl = document.createElement("div")

  partEl.classList.add("pie__part")
  partEl.style.clipPath = pieClipPath(angle, part)

  // Create lvls for each part
  createSliceDivisions(partEl, lvls, part)

  // Create dividers between each slice
  const sliceDividerEl = document.createElement("div")
  sliceDividerEl.classList.add("pie__slice-divider")
  sliceDividerEl.style.rotate = `${part * angle}rad`

  contEl.appendChild(partEl)
  contEl.appendChild(sliceDividerEl)
}


// Create dividers between levels
for (let lvl = 1; lvl < lvls; lvl++) {
  const lvlDividerEl = document.createElement("div")
  lvlDividerEl.classList.add("pie__lvl-divider")
  lvlDividerEl.style.width = `${100 * lvl / lvls}%`
  lvlDividerEl.style.height = `${100 * lvl / lvls}%`

  contEl.appendChild(lvlDividerEl)
}
