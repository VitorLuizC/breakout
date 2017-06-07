/**
 * @typedef {Array.<('top'|'right'|'bottom'|'left')>} Collisions
 */

/**
 * @typedef {Object} Bounds
 * @property {number} top
 * @property {number} right
 * @property {number} bottom
 * @property {number} left
 */

/**
 * @param {Bounds} a
 * @param {Bounds} b
 * @param {('contain')} type
 * @returns {Collisions}
 */
export function collide(a, b, type = 'contain') {
  /**
   * Detected colisions between "a" and "b".
   * @type {Collisions}
   */
  const colisions = []

  if (type === 'contain') {
    if (a.top < b.top)
      colisions.push('top')
    if (a.right > b.right)
      colisions.push('right')
    if (a.bottom > b.bottom)
      colisions.push('bottom')
    if (a.left < b.left)
      colisions.push('left')
  } else if (type === 'hit') {
    if (a.bottom > b.top) {
      if (a.right > b.left && a.left < b.right)
        colisions.push('top')
      else if (a.right > b.left && a.left < b.left)
        colisions.push('top', 'right')
      else if (a.left < b.right && a.right > b.right)
        colisions.push('top', 'left')
    }
  }

  return colisions
}
