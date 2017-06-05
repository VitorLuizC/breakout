/**
 * @typedef {Object} Position
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} DrawOptions
 * @property {('circle'|'rect'|'square')} shape
 * @property {number|Array.<number>} size
 * @property {Position} position
 * @property {string} color
 */

/**
 * @param {CanvasRenderingContext2D} context
 * @param {DrawOptions} options
 */
export function draw(context, options = {}) {
  const { shape = 'rect', size = [50, 50] } = options
  const { x = 0, y = 0 } = options.position || {}

  context.beginPath()

  if (shape === 'circle')
    context.arc(x, y, size / 2, 0, Math.PI * 2)
  else if (shape === 'rect' || shape === 'square') {
    const [width, height] = Array.isArray(size) ? size : [size, size]
    context.rect(x, y, width, height)
  }

  const { color = '#000' } = options

  context.fillStyle = color
  context.fill()
  context.closePath()
}

/**
 * 
 * @param {CanvasRenderingContext2D} context
 * @param {{width:number, height:number}} bounds
 */
export function clean(context, { width, height }) {
  context.clearRect(0, 0, width, height)
}
