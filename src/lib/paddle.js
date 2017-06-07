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
 * @property {Bounds} bounds
 * @property {function(CanvasRenderingContext2D):void} draw
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
    get bounds() {
      return getBounds(this)
    },
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
function drawPaddle(context, paddle) {
  draw(context, { ...paddle })
}

/**
 * Gets paddle's bounds.
 * @param {Paddle} paddle
 * @returns {Bounds}
 */
function getBounds(paddle) {
  return {
    top: paddle.position.y,
    right: paddle.position.x + paddle.size[0],
    bottom: paddle.position.y + paddle.size[1],
    left: paddle.position.x
  }
}
