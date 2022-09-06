/**
 * Function calculating pie clip path
 * @param {Number} angle Angle of a pie part in radians
 * @param {Number} part Index of the pie slice
 */
export default function pieClipPath(angle, part) {
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
