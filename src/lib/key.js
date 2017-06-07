/**
 * List of pressed keys.
 * @type {Array.<string>}
 */
const keys = []

window.addEventListener('keydown', ({ code: key }) => {
  if (!keys.includes(key))
    keys.push(key)
})

window.addEventListener('keyup', ({ code: key }) => {
  const index = keys.indexOf(key)
  if (index >= 0)
    keys.splice(index, 1)
})

/**
 * Check if a key is pressed.
 * @param {string} key
 * @returns {boolean}
 */
export function isPress(key) {
  return keys.includes(key)
}

/**
 * Check if a key is released.
 * @param {string} key
 * @returns {boolean}
 */
export function isReleased(key) {
  return !isPress(key)
}
