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
 * @typedef {Object} IGameObject
 * @property {Bounds} bounds
 */

/**
 * @param {IGameObject} a
 * @param {IGameObject} b
 * @param {('contain')}
 * @returns {Collisions}
 */
export function collide(a, b, type = 'contain') {
  /**
   * Detected colisions between "a" and "b".
   * @type {Collisions}
   */
  const colisions = []

  if (type === 'contain') {
    if (a.bounds.top <= b.bounds.top)
      colisions.push('top')
    if (a.bounds.right >= b.bounds.right)
      colisions.push('right')
    if (a.bounds.bottom >= b.bounds.bottom)
      colisions.push('bottom')
    if (a.bounds.left <= b.bounds.left)
      colisions.push('left')
  }

  return colisions
}
