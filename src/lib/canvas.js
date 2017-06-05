/**
 * Abstraction of <canvas> primary properties.
 * @typedef {Object} Canvas
 * @property {HTMLCanvasElement} element
 * @property {CanvasRenderingContext2D} context
 */

/**
 * <canvas> or CSS selector to match a <canvas> on DOM.
 * @typedef {(string|HTMLCanvasElement)} Target
 */

/**
 * <canvas> definitions.
 * @typedef {Object} CanvasOptions
 * @property {number} width
 * @property {number} height
 */

/**
 * Create a <canvas>.
 * @param {HTMLElement} parent
 * @param {CanvasOptions} options
 * @returns {Canvas}
 */
export function create(parent, options) {
  const target = document.createElement('canvas')

  parent.appendChild(target)

  return select(target, options)
}

/**
 * Select an existing <canvas>.
 * @param {Target} target
 * @param {CanvasOptions} options
 * @returns {Canvas}
 */
export function select(target, options = {}) {
  const element = (typeof target === 'string') ? document.querySelector(target) : target

  if (!(element instanceof HTMLCanvasElement))
    throw new Error('Can\'t get <canvas>')

  const { width = 640, height = 480 } = options

  element.width = width
  element.height = height

  return {
    element,
    context: element.getContext('2d')
  }
}
