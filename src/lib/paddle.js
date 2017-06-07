import { draw } from './draw'


/**
 * @typedef {Object} Position
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Bounds
 * @property {number} top
 * @property {number} right
 * @property {number} bottom
 * @property {number} left
 */

/**
 * @typedef {Object} Paddle
 * @property {string} color
 * @property {Position} position
 * @property {[number,number]} size
 */

/**
 * Create a new paddle.
 * @returns {Paddle}
 */
export default function createPaddle(initialPosition) {
  return {
    color: 'red',
    size: [100, 30],
    position: initialPosition,
    draw: function (context) {
      drawPaddle(context, this)
    }
  }
}

/**
 * Draws a paddle.
 * @param {CanvasRenderingContext2D} context
 * @param {Paddle} paddle
 */
export function drawPaddle(context, paddle) {
  draw(context, { ...paddle })
}

/**
 * Gets paddle's bounds.
 * @param {Paddle} paddle
 * @returns {Bounds}
 */
export function getBounds(paddle) {
  return {
    top: paddle.position.x - paddle.size[0] / 2,
    bottom: paddle.position.x + paddle.size[0] / 2
  }
}
