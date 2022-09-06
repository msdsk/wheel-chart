/**
 * Function building a pie level
 * @param {HTMLDivElement} partEl
 * @param {Number} lvls Total number of levels
 * @param {Number} part Current
 */
export default function createSliceDivisions(partEl, lvls, part) {

  for (let lvl = lvls; lvl > 0; lvl--) {

    const lvlInputEl = document.createElement("input")
    const lvlLabelEl = document.createElement("label")

    lvlInputEl.classList.add("pie__input")
    lvlInputEl.setAttribute("type", "radio")
    lvlInputEl.setAttribute("name", `part-${part}`)
    lvlInputEl.setAttribute("id", `part-${part}-${lvl}`)

    lvlLabelEl.setAttribute("for", `part-${part}-${lvl}`)
    lvlLabelEl.classList.add("pie__label")
    lvlLabelEl.classList.add(`pie__label--lvl-${lvl}`)
    lvlLabelEl.style.width = `${100 * lvl / lvls}%`
    lvlLabelEl.style.height = `${100 * lvl / lvls}%`
    lvlLabelEl.style.backgroundColor = `hsl(223, 100%, ${50 * (lvls - lvl) / lvls + 40}%)`

    partEl.appendChild(lvlInputEl)
    partEl.appendChild(lvlLabelEl)
  }
}
